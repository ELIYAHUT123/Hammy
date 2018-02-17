import React, { PropTypes } from "react"
import _ from "lodash"

import Delivery from "./delivery"


export default class DeliveriesList extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        deliveries_ids: PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]))
    }

    constructor(props){
        super(props)
        this.state = {
            selected: []
        }
    }

    toggleSelectDelivery(delivery_id){
        const new_state = {...this.state}
        new_state.selected = this.state.selected.slice(0)
        if (_.includes(new_state.selected, delivery_id)){
            _.pull(new_state.selected, delivery_id)
        }
        else {
            new_state.selected.push(delivery_id)
        }
        this.setState(new_state)
    }

    getStyle(delivery_id){
        if (_.includes(this.selected, delivery_id)){
            return {backgroundColor: 'lightblue'}
        }
        return {backgroundColor: 'yellow'}
    }

    get selected(){
        return this.state.selected.slice(0)
    }

    render() {
        const deliveries = this.props.deliveries_ids.map(delivery_id =>
            <div
                key={delivery_id}
                class="panel panel-default panel-ms-schedule"
                onClick={() => {this.toggleSelectDelivery(delivery_id)}}
                style={this.getStyle(delivery_id)}
            >
                <div class="panel-body">
                    <Delivery id={delivery_id} />
                </div>
            </div>)

        return <div class="col col-md-4">


                   <div class="row sortable">
                       <h3 class="text-center" style={{height: "90px", padding: "30px", width: "100%"}}>{this.props.title}</h3>
                       {deliveries}
                   </div>
               </div>
    }
}