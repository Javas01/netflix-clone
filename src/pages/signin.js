import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { Form } from '../components'
import { FooterContainer, HeaderContainer } from '../containers'
import * as ROUTES from '../constants/routes'

export default function Signin () {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isInvalid = !password || !email

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      history.push(ROUTES.BROWSE)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSubmit} method='POST'>
            <Form.Input
              placeholder='Email'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type='password'
              placeholder='Password'
              autoComplete='off'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type='submit'>
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
          New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
