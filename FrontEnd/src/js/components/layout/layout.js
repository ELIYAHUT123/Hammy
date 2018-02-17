import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Notifications from "react-notification-system-redux"

import Footer from "./footer"
import Nav from "./nav"

import { fetchAllDataFromDB } from "./../../actions/initialize_actions"

function mapStateToProps(state) {
    return { notifications: state.notifications }
}

function mapDispatchToProps(dispatch) {
    return { fetchAllDataFromDB: bindActionCreators(fetchAllDataFromDB, dispatch) }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Layout extends React.Component {
    componentWillMount(){
        this.props.fetchAllDataFromDB()
    }
    render() {
        const {notifications} = this.props
        const containerStyle = {
            marginTop: "60px"
        }
        return (
            <div>

                <Nav/>

                <div class="container" style={containerStyle}>
                    <div class="row">
                        <div class="col-lg-12">
                            {this.props.children}
                        </div>
                    </div>
                    <Footer/>
                </div>
                <Notifications notifications={notifications} />
            </div>
        )
    }
}
