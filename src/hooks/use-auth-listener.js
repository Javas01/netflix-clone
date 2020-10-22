import { useContext, useState, useEffect } from 'react'
import { FirebaseContext } from '../context/firebase'

export default function useAuthListener () {
  const { firebase } = useContext(FirebaseContext)
  const [user, setUser] = useState({})
  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged(function (authUser) {
      if (authUser) {
        setUser(authUser)
      } else {
        setUser(null)
      }
    })

    return () => listener()
  }, [])

  return { user }
}
