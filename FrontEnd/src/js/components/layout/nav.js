import React from "react"
import { IndexLink, Link } from "react-router"

export default class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            collapsed: true
        }
    }

    toggleCollapse() {
        this.setState({collapsed: !this.state.collapsed})
    }

    render() {
        const { collapsed } = this.state
        const navClass = collapsed ? "collapse" : ""

        return (
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li>
                                <IndexLink activeStyle={{color: "green"}} to="/" >Home</IndexLink>
                            </li>
                            <li>
                                <Link activeStyle={{color: "green"}} to="deliveries" >Deliveries</Link>
                            </li>
                            <li>
                                <Link activeStyle={{color: "green"}} to="stock" >Stock</Link>
                            </li>
                            <li>
                                <Link activeStyle={{color: "green"}} to="cashaudit" >Cach Audit</Link>
                            </li>
                            <li>
                                <Link activeStyle={{color: "green"}} to="menu" >Menu</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
