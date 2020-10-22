import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { Form } from '../components'
import { FooterContainer, HeaderContainer } from '../containers'
import * as ROUTES from '../constants/routes'

export default function Signup () {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isInvalid = !password || !email || !name

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
      await res.user.updateProfile({
        displayName: name,
        photoURL: 2
      })
      history.push(ROUTES.BROWSE)
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSubmit} method='POST'>
            <Form.Input
              placeholder='First Name'
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
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
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
