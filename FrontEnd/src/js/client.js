import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, browserHistory } from "react-router"

import DeliveriesPage from "./pages/deliveries_page"
import HomePage from "./pages/home_page"
import Layout from "./components/layout/layout"
import StockPage from "./pages/stock_page"
import CashAuditPage from "./pages/cash_audit_page"
import MenuPage from "./pages/menu_page"
import store from "./store"

const app = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={HomePage}></IndexRoute>
                <Route path="deliveries(/:delivery_id)" name="deliveries" component={DeliveriesPage}></Route>
                <Route path="stock" name="stock" component={StockPage}></Route>
                <Route path="cashaudit" name="cashaudit" component={CashAuditPage}></Route>
                <Route path="menu" name="menu" component={MenuPage}></Route>
            </Route>
        </Router>
    </Provider>,
    app)
