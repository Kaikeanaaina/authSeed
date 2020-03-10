import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Landing from './Landing'
import Dashboard from './Dashboard'
import Login from './Login'


class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
    .then(() => {console.log('123123', this.props.auth)})
  }
  renderRoutes() {
    switch (this.props.auth){
      case null:
        return
      case false:
        return  <Route path="*" component={Login} />
      default:
        return(
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Dashboard} />
          </div>
        )
    }
  }
  render() {
    return (
        <BrowserRouter>
          <div className="container">
            <Header />
            {this.renderRoutes()}
          </div>
        </BrowserRouter>
    )
  }
}

  function mapStateToProps({ auth }) {
    return { auth }
  }

export default connect(mapStateToProps, actions)(App)
