import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { Home, Browse, Signin, Signup } from './pages'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { useAuthListener } from './hooks'

export default function App () {
  const { user } = useAuthListener()
  // console.log(JSON.parse(JSON.stringify(user)))
  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        exact path={ROUTES.HOME}
      >
        <Home />
      </IsUserRedirect>
      <ProtectedRoute
        user={user}
        path={ROUTES.BROWSE}
      >
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
      >
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
      >
        <Signup />
      </IsUserRedirect>
    </Router>
  )
}
