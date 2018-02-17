import axios from "axios"

import { FETCH_ALL_DATA_FROM_DB } from "../actions/initialize_actions"
import { DELIVERY_STARTED, DELIVERY_DONE, DELIVERY_SUSPENDED } from "../actions/delivery_actions"
import { DeliveryStatus } from "../components/delivery"
import { CONFIG, RESTAPI_URL } from "../common"


const setStatus = (state, action, status) => {
    const { id } = action.payload.delivery
    const url = [RESTAPI_URL, 'delivery', id.toString()].join('/') + '/'
    const data = {"status": status}
    axios.patch(url, data, CONFIG)
    return {...state, [id]: {...state[id], status: status}}
}

export default function reducer(state={}, action) {
    switch (action.type) {
        case FETCH_ALL_DATA_FROM_DB: {
            const new_state = {}
            action.payload.delivery.map(delivery => {
                new_state[delivery.id] = delivery
            })
            return new_state
        }
        case DELIVERY_STARTED: {
            return setStatus(state, action, DeliveryStatus.IN_PROGRESS)
        }
        case DELIVERY_DONE: {
            return setStatus(state, action, DeliveryStatus.DONE)
        }
        case DELIVERY_SUSPENDED: {
            return setStatus(state, action, DeliveryStatus.TODO)
        }
        default: {
            return state
        }
    }
}
