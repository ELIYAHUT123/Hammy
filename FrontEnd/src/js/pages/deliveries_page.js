import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import _ from "lodash"

import { DeliveryStatus } from "../components/delivery"
import DeliveriesList from "../components/deliveries_list"
import { deliveryStarted, deliveryDone, deliverySuspended } from "../actions/delivery_actions"


function mapStateToProps(store) {
    const todo = []
    const in_progress = []
    const done = []
    _.values(store.deliveries).map(delivery => {
        switch (delivery.status){
            case DeliveryStatus.TODO:{
                todo.push(delivery.id)
                break
            }
            case DeliveryStatus.IN_PROGRESS:{
                in_progress.push(delivery.id)
                break
            }
            case DeliveryStatus.DONE:{
                done.push(delivery.id)
                break
            }
        }
    })
    return {
        todo,
        in_progress,
        done
    }
}


function mapDispatchToProps(dispatch) {
    return {
        deliveryStarted: bindActionCreators(deliveryStarted, dispatch),
        deliveryDone: bindActionCreators(deliveryDone, dispatch),
        deliverySuspended: bindActionCreators(deliverySuspended, dispatch)
    }
}


@connect(mapStateToProps, mapDispatchToProps)
export default class DeliveriesPage extends React.Component {
    constructor(){
        super()

        this.startDeliveries = this.startDeliveries.bind(this)
        this.suspendDeliveries = this.suspendDeliveries.bind(this)
        this.finishDeliveries = this.finishDeliveries.bind(this)
    }

    startDeliveries(){
        const selected = this.refs.todoList.selected
        selected.map(delivery_id => {this.props.deliveryStarted(delivery_id)})
        this.refs.todoList.setState({selected: []})
    }

    suspendDeliveries(){
        const selected = this.refs.ipList.selected
        selected.map(delivery_id => {this.props.deliverySuspended(delivery_id)})
        this.refs.ipList.setState({selected: []})
    }

    finishDeliveries(){
        const selected = this.refs.ipList.selected
        selected.map(delivery_id => {this.props.deliveryDone(delivery_id)})
        this.refs.ipList.setState({selected: []})
    }

    render() {
        return (
            <div class="row"
                style={{
                display: "flex"
            }}>
                <h1>Deliveries</h1>
                <DeliveriesList title={DeliveryStatus.TODO} deliveries_ids={this.props.todo} ref="todoList"/>
                <button type="button" onClick={this.startDeliveries}>Start Selected</button>
                <button type="button" onClick={this.suspendDeliveries}>Suspend Selected</button>
                <DeliveriesList title={DeliveryStatus.IN_PROGRESS} deliveries_ids={this.props.in_progress} ref="ipList"/>
                <button type="button" onClick={this.finishDeliveries}>Finish Selected</button>
                <DeliveriesList title={DeliveryStatus.DONE} deliveries_ids={this.props.done} ref="doneList"/>
            </div>
        )
    }
}
