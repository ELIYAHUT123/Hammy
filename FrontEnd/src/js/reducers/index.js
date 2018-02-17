import { combineReducers } from "redux"
import _ from "lodash"
import {reducer as notifications} from "react-notification-system-redux"

import deliveries from "./deliveries_reducer"
import stock from "./stock_reducer"
import cash from "./cash_reducer"
import meals from "./meals_reducer"
import ingredients from "./ingredients_reducer"


export default combineReducers({
    notifications,
    deliveries,
    meals,
    stock,
    ingredients,
    cash
})


export const getAllDeliveries = state => state.deliveries

export const getDeliveryById = (state, id) => state.deliveries[id]


export const getDeliveryPriceById = (state, id) =>
    _.sum(getDeliveryById(state, id).meals.map(meal => getMealById(state, meal.meal_id).price * meal.amount))


export const getDeliveryMealsIdsToAmountById = (state, id) => {
    const meals_ids_to_amount = {}

    getDeliveryById(state, id).meals.map(meal => {
        meals_ids_to_amount[meal.meal_id] = meal.amount
    })
    return meals_ids_to_amount
}


export const getDeliveryIngredientsIdsToAmountById = (state, id) => {
    const ingredients_ids_to_amount = {}

    getDeliveryById(state, id).meals.map(meal => {
        const mealObj = getMealById(state, meal.meal_id)

        mealObj.ingredients.map(ingredient => {
            const ingID = ingredient.ingredient_id

            if (!ingredients_ids_to_amount.hasOwnProperty(ingID)){
                ingredients_ids_to_amount[ingID] = 0
            }
            ingredients_ids_to_amount[ingID] += ingredient.amount * meal.amount
        })
    })
    return ingredients_ids_to_amount
}

export const getMissingIngredientsInStock = (state, ingredients_ids_to_amount) => {
    const missing_ingredients = {}
    _.map(ingredients_ids_to_amount, (amount, ingredient_id) => {
        if (state.stock[ingredient_id].amount < amount){
            missing_ingredients[ingredient_id] = amount - state.stock[ingredient_id].amount
        }
    })
    return missing_ingredients
}


export const getAllMeals = state => state.meals


export const getMealById = (state, id) => state.meals[id]


export const getAllStock = state => state.stock


export const getStockById = (state, id) => state.stock[id]


export const getAllIngredients = state => state.ingredients


export const getIngredientById = (state, id) => state.ingredients[id]


export const getCash = state => state.cash
