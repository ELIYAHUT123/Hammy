import React from "react"
import { connect } from "react-redux"
import _ from "lodash"

import Meal from "../components/meal"
import { getAllMeals } from "../reducers"

@connect(state => {
    return {
        meals: getAllMeals(state)
    }
})
export default class MenuPage extends React.Component {
    render() {
        const meals = _.keys(this.props.meals).map(meal_id => <Meal id={meal_id} key={meal_id}/>)

        return (
            <div>
                <h1>Menu</h1>
                {meals}
            </div>
        )
    }
}
