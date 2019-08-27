import React from 'react'
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './pages/Main/Main'
import New from './pages/Member/New'

const Routes = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={ Main } />
            <Route path="/member/new" component={ New } />
        </Switch>
    </Router>
)

export default Routes