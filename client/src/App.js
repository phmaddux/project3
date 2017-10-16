import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage/HomePage'
import LogInPage from './components/LogInPage/LogInPage'
import ProjectPage from './components/ProjectPage/ProjectPage'
import VariantPage from './components/VariantPage/VariantPage'


class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <div>
            <Link to='/login'>Login</Link>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/login" component={LogInPage}/>
            <Route exact path="/project" component={ProjectPage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
