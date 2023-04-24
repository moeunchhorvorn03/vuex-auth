import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCWwGLtKR09Evw8y-D4L7eDcy4DPxZvxKg",
    authDomain: "form-firebase-e5c9a.firebaseapp.com",
    databaseURL: "https://form-firebase-e5c9a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "form-firebase-e5c9a",
    storageBucket: "form-firebase-e5c9a.appspot.com",
    messagingSenderId: "714008738855",
    appId: "1:714008738855:web:d6ec3b6b4162a1a0cca202"
  }

  initializeApp(firebaseConfig)

  const auth = getAuth()

  export { auth }
