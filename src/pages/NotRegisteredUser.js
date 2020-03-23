import React, { Fragment } from 'react'
import Context from '../Contex'
import { UserForm } from '../components/UserForm'
export const NotRegisteredUser = () => (
  <Context.Consumer >
    {
      ({activateAuth}) => {
        return (
          <Fragment>
            <UserForm title='Registrarse' onSubmit={activateAuth} />
            <UserForm title='Iniciar sesion' onSubmit={activateAuth} />
          </Fragment>
        )
      }
    }
  </Context.Consumer>
)
