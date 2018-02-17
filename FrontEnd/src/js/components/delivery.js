import React, { PropTypes } from "react"
import { connect } from "react-redux"
import _ from "lodash"

import Meal from "./meal"
import { getDeliveryById, getDeliveryPriceById, getDeliveryMealsIdsToAmountById } from "../reducers"


export const DeliveryStatus = {
    TODO: "TODO",
    IN_PROGRESS: "In Progress",
    DONE: "Done"
}

@connect((state, { id })=> {
    return {
        delivery: getDeliveryById(state, id),
        price: getDeliveryPriceById(state, id),
        meals_ids_to_amount: getDeliveryMealsIdsToAmountById(state, id)
    }
})
export default class Delivery extends React.Component {
    static propTypes = {
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }

    render() {
        const meals_with_amounts = _.map(this.props.meals_ids_to_amount, (amount, meal_id) =>
            <li key={meal_id}><Meal id={meal_id}/> X {amount}</li>)

        return <div key={this.id}
                    style={{
                        BorderStyle: 'solid',
                        BorderColor: '#0000ff',
                        BackgroundColor: 'green',
                        display: 'block',
                    }}
               >
                   <span style={{padding: '5px'}}>{this.props.delivery.address} - {this.props.price} $</span>
                   <ul style={{listStyleType: "none", marginLeft: "-3em"}}>
                       {meals_with_amounts}
                   </ul>
               </div>
    }
}
