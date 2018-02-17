import axios from "axios"

import { DELIVERY_DONE } from "./../actions/delivery_actions"
import { FETCH_ALL_DATA_FROM_DB } from "./../actions/initialize_actions"
import { CONFIG, RESTAPI_URL } from "../common"


export default function reducer(state=null, action) {

    switch (action.type) {
        case FETCH_ALL_DATA_FROM_DB: {
            return action.payload.cash[0].cash
        }
        case DELIVERY_DONE: {
            const new_amount = state + action.payload.price
            const url = [RESTAPI_URL, 'cash', '1'].join('/') + '/'
            const data = {"cash": new_amount}
            axios.patch(url, data, CONFIG)
            return new_amount
        }
        default: {
            return state
        }
    }
}
