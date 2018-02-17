import axios from "axios"
import _ from "lodash"

import { FETCH_ALL_DATA_FROM_DB } from "./../actions/initialize_actions"
import { DELIVERY_STARTED, DELIVERY_SUSPENDED } from "../actions/delivery_actions"
import { CONFIG, RESTAPI_URL } from "../common"

export default function reducer(state={}, action) {

    switch (action.type) {
        case FETCH_ALL_DATA_FROM_DB: {
            const new_state = {}
            action.payload.stockingredient.map(stockingredient => {
                new_state[stockingredient.ingredient_id] = stockingredient
            })
            return new_state
        }
        case DELIVERY_STARTED: {
            const new_state = _.cloneDeep(state)
            _.map(action.payload.ingredients_ids_to_amount, (amount, ingredient_id) => {
                const url = [RESTAPI_URL, 'stockingredient', ingredient_id.toString()].join('/') + '/'
                const new_amount = new_state[ingredient_id].amount - amount
                const data = {"amount": new_amount}
                axios.patch(url, data, CONFIG)
                new_state[ingredient_id].amount = new_amount
            })
            return new_state
        }
        case DELIVERY_SUSPENDED: {
            const new_state = _.cloneDeep(state)
            _.map(action.payload.ingredients_ids_to_amount, (amount, ingredient_id) => {
                const url = [RESTAPI_URL, 'stockingredient', ingredient_id.toString()].join('/') + '/'
                const new_amount = new_state[ingredient_id].amount + amount
                const data = {"amount": new_amount}
                axios.patch(url, data, CONFIG)
                new_state[ingredient_id].amount = new_amount
            })
            return new_state
        }
        default: {
            return state
        }
    }
}
