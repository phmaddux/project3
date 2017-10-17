import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage/HomePage'
import LogInPage from './components/LogInPage/LogInPage'
import ProjectPage from './components/ProjectPage/ProjectPage'
import VariantPage from './components/VariantPage/VariantPage'

const Banner = styled.div`
background-color: rgba(255,255,255,.375) ;
margin: 10px 10px;
display: flex;
padding: px 5vw;
width: vw;
height: 45px;
`
const BannerItem = styled.div`
background-color: rgba(255,255,255,.375) ;
font-size: 2rem;
font-weight: Bold;
margin: 15px 15px;
text-decoration: none;
color: grey;
display: flex;
align-content: center;
padding: px 5vw;
width: vw;
height: 37px;
`

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Banner>
          <BannerItem>
            <Link to='/'>Homepage </Link>
            </BannerItem>
            <BannerItem>
            <Link to='/login'>Login </Link>
            </BannerItem>
            <BannerItem>
            <Link to='/project'> Project Types</Link>
            </BannerItem>
          </Banner>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/project" component={ProjectPage} />
            <Route exact path="/variant" component={VariantPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
