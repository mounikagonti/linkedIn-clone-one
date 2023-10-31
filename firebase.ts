import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB4JXkvMXU4vK-aSDrPDLfUYYWmsD-JFu8',
  authDomain: 'linkedin-clone-one-39c9d.firebaseapp.com',
  projectId: 'linkedin-clone-one-39c9d',
  storageBucket: 'linkedin-clone-one-39c9d.appspot.com',
  messagingSenderId: '673935035999',
  appId: '1:673935035999:web:92987f241560453fee55ea',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}
