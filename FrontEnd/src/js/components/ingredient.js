import React, { PropTypes } from "react"
import { connect } from "react-redux"

import { getIngredientById } from "../reducers"

@connect((state, { id }) => {
    return {
        ingredient: getIngredientById(state, id)
    }
})
export default class Ingredient extends React.Component {
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
                {this.props.ingredient.name}
            </div>
        )
    }
}
