import React from "react"
import { connect } from "react-redux"
import _ from "lodash"

import StockIngredient from "../components/stock_ingredient"
import { getAllStock } from "../reducers"

@connect(state => {
    return {
        stock: getAllStock(state)
    }
})
export default class StockPage extends React.Component {
    render() {
        const ingredients = _.keys(this.props.stock).map(ingredient_id => <StockIngredient id={ingredient_id}
                                                                                           key={ingredient_id}
                                                                          />)
        return (
            <div>
                <h1>Stock</h1>
                {ingredients}
            </div>
        )
    }
}
