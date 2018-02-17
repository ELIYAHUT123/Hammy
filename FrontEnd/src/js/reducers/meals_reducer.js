import { FETCH_ALL_DATA_FROM_DB } from "./../actions/initialize_actions"


export default function reducer(state={}, action) {

    switch (action.type) {
        case FETCH_ALL_DATA_FROM_DB: {
            const new_state = {}
            action.payload.meal.map(meal => {
                new_state[meal.id] = meal
            })
            return new_state
        }
        default: {
            return state
        }
    }
}
