import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDmDK6T2Lk0nIl4BkXtDzO24n96me80P1o',
  authDomain: 'type-s-9567b.firebaseapp.com',
  databaseURL:
    'https://type-s-9567b-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'type-s-9567b',
  storageBucket: 'type-s-9567b.appspot.com',
  messagingSenderId: '320905762013',
  appId: '1:320905762013:web:075e82c7afc0cc85377734',
}

firebase.initializeApp(firebaseConfig)

export default firebase
