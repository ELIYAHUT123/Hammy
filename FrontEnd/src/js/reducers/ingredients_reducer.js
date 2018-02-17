import { FETCH_ALL_DATA_FROM_DB } from "./../actions/initialize_actions"


export default function reducer(state={}, action) {

    switch (action.type) {
        case FETCH_ALL_DATA_FROM_DB: {
            const new_state = {}
            action.payload.ingredient.map(ingredient => {
                new_state[ingredient.id] = ingredient
            })
            return new_state
        }
        default: {
            return state
        }
    }
}

