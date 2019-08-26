import React from 'react'
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './pages/Main/Main'

const Routes = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={ Main } />
        </Switch>
    </Router>
)

export default Routes