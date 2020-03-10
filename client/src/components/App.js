import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Landing from './Landing'
import Dashboard from './Dashboard'


class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }
  render() {
    return (
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Dashboard} />
          </div>
        </BrowserRouter>
    )
  }
}

//maybe put a function in here
//checks to see if this.props.auth is true (loggedin)
  //if not it pushes to login or landing

//then checks if a path or url exist, 
  //if not give a 404

export default connect(null, actions)(App)
