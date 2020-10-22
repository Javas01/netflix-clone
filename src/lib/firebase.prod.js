import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDRq1AW3LY94fWMUs1CsV5vRfBc9OwWUDA',
  authDomain: 'netflix-93575.firebaseapp.com',
  databaseURL: 'https://netflix-93575.firebaseio.com',
  projectId: 'netflix-93575',
  storageBucket: 'netflix-93575.appspot.com',
  messagingSenderId: '1068664264781',
  appId: '1:1068664264781:web:bb84dfa3058f65f437a404'
}
// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig)

export { firebase }
