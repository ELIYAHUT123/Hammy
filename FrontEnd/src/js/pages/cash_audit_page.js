import React from "react"
import { connect } from "react-redux"

import { getCash } from "../reducers"


@connect(state => {
    return {
        cash: getCash(state)
    }
})
export default class CashAuditPage extends React.Component {
    render() {

        return (
            <div>
                <h1>The money amount is {this.props.cash}</h1>
            </div>
        )
    }
}

