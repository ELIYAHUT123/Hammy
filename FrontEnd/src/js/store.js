import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import _ from "lodash"
import Notifications from "react-notification-system-redux"

import reducer, { getDeliveryById, getDeliveryIngredientsIdsToAmountById, getMissingIngredientsInStock , getDeliveryPriceById, getIngredientById } from "./reducers"

import { DELIVERY_STARTED, DELIVERY_DONE, DELIVERY_SUSPENDED } from "./actions/delivery_actions"


const notEnoughResources = {
    title: 'Not enough ingredients',
    message: '',
    position: 'tr',
    autoDismiss: 3,
    action: {
        label: 'OK'
    }
}
const deliveryStarted = {
    title: 'Delivery started',
    message: '',
    position: 'tr',
    autoDismiss: 3,
    action: {
        label: 'OK'
    }
}
const deliverySuspended = {
    title: 'Delivery suspended',
    message: '',
    position: 'tr',
    autoDismiss: 3,
    action: {
        label: 'OK'
    }
}
const deliveryDone = {
    title: 'Delivery done',
    message: '',
    position: 'tr',
    autoDismiss: 3,
    action: {
        label: 'OK'
    }
}

const myMiddleware = store => next => action => {
    const state = store.getState()
    switch (action.type){
        case DELIVERY_STARTED:{
            const ingredients_ids_to_amount = getDeliveryIngredientsIdsToAmountById(state, action.payload)
            const missing_ingredients = getMissingIngredientsInStock(state, ingredients_ids_to_amount)
            if (_.keys(missing_ingredients).length !== 0){
                let message = 'Missing ingredients are:'
                _.map(missing_ingredients, (missing_amount, ingredient_id) => {
                    message += ' ' + getIngredientById(state, ingredient_id).name + ': ' + missing_amount.toString()
                })
                notEnoughResources.message = message
                next(Notifications.error(notEnoughResources))
                break
            }
            deliveryStarted.message = "Delivery " + action.payload.toString() + " started!"
            action.payload = {
                delivery: getDeliveryById(state, action.payload),
                ingredients_ids_to_amount
            }
            next(action)
            next(Notifications.success(deliveryStarted))
            break
        }
        case DELIVERY_SUSPENDED:{
            deliverySuspended.message = "Delivery " + action.payload.toString() + " suspended!"
            action.payload = {
                delivery: getDeliveryById(state, action.payload),
                ingredients_ids_to_amount: getDeliveryIngredientsIdsToAmountById(state, action.payload)
            }
            next(action)
            next(Notifications.success(deliverySuspended))
            break
        }
        case DELIVERY_DONE:{
            deliveryDone.message = "Delivery " + action.payload.toString() + " done!"
            action.payload = {
                delivery: getDeliveryById(state, action.payload),
                price: getDeliveryPriceById(state, action.payload)
            }
            next(action)
            next(Notifications.success(deliveryDone))
            break
        }
        default :{
            next(action)
        }
    }
}

const middleware = applyMiddleware(myMiddleware, thunk, logger())

export default createStore(reducer, middleware)
