import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = (props) => {
  const Component = props.component
  return (
    <Route exact={!!props.exact} path={props.path} render={(properties) => (
      props.isLoggedIn === true
      ? <Component {...props}{...properties} />
      : <Redirect to='/login' />
    )}/>
  )
}