import axios from "axios"

import { RESTAPI_URL, CONFIG } from "../common"


export const FETCH_ALL_DATA_FROM_DB = 'FETCH_ALL_DATA_FROM_DB'

export function fetchAllDataFromDB() {
    console.log('Loading data from the DB')
    const url = [RESTAPI_URL, 'all'].join('/') + '/'
    return dispatch => {
        axios.get(url, CONFIG)
            .then(response => {
                dispatch({
                    type: FETCH_ALL_DATA_FROM_DB,
                    payload: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
}
