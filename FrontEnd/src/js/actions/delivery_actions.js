export const DELIVERY_STARTED = 'DELIVERY_STARTED'
export const DELIVERY_DONE = 'DELIVERY_DONE'
export const DELIVERY_SUSPENDED = 'DELIVERY_SUSPENDED'

export function deliveryStarted(delivery_id) {
    return {
        type: DELIVERY_STARTED,
        payload: delivery_id
    }
}


export function deliveryDone(delivery_id) {
    return {
        type: DELIVERY_DONE,
        payload: delivery_id
    }
}


export function deliverySuspended(delivery_id) {
    return {
        type: DELIVERY_SUSPENDED,
        payload: delivery_id
    }
}