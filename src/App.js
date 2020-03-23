import React from 'react'

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

import { Router } from '@reach/router'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/Users'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import Context from './Contex'


const UserLogged = ({ children }) => {
  return children({ isAuth: true})
}

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId'/>
      </Router>
      <Context.Consumer>
        {
          ({ isAuth}) => 
          isAuth ? <Router>
            <Favs path='/favs'/>
            <User path='/user'/>
          </Router> : <Router>
            <NotRegisteredUser path='/favs'/>
            <NotRegisteredUser path='/user'/>
          </Router>
        }
      </Context.Consumer>
      <NavBar />
    </div>
  )
}
