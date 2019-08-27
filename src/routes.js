import React from 'react'
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './pages/Main/Main'
import New from './pages/Member/New'
import Edit from './pages/Member/Edit'
const Routes = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={ Main } />
            <Route path="/member/new" component={ New } />
            <Route path="/member/edit/:id" component={ Edit } />
        </Switch>
    </Router>
)

export default Routes