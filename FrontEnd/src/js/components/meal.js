import React, { PropTypes } from "react"
import { connect } from "react-redux"

import { getMealById } from "../reducers"


@connect((state, { id }) => {
    return {
        meal: getMealById(state, id)
    }
})
export default class Meal extends React.Component {
    static propTypes = {
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }

    constructor(){
        super()

        this.state ={
            show_description: false
        }

        this.toggleShowDescription = this.toggleShowDescription.bind(this)
    }

    toggleShowDescription(){
        this.setState({show_description: !this.state.show_description})
    }

    render() {
        return (
            <div
                onClick={this.toggleShowDescription}
                style={{
                BorderStyle: 'solid',
                BorderColor: '#0000ff',
                BackgroundColor: 'yellow',
                display: 'block',
            }}>
                <span style={{padding: '5px'}}>{this.props.meal.name} - {this.props.meal.price} $</span>
                {this.state.show_description && <textarea style={{padding: '5px'}} cols="30" rows="1" value={this.props.meal.description} disabled></textarea>}
            </div>
        )
    }
}
