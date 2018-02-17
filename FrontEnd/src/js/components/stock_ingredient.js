import React, { PropTypes } from "react"
import { connect } from "react-redux"

import { getStockById, getIngredientById } from "../reducers"


@connect((state, { id }) => {
    return {
        amount: getStockById(state, id).amount,
        name: getIngredientById(state, id).name,
    }
})
export default class StockIngredient extends React.Component {
    static propTypes = {
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }

    render() {
        return (
            <div
                style={{
                    display: 'block',
                    BorderStyle: 'solid',
                    BorderColor: '#0000ff',
                    BackgroundColor: 'yellow'
                }}>
                {this.props.name} X {this.props.amount}
            </div>
        )
    }
}

