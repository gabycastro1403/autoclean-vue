import firebase from 'firebase'
import router from '../router';

const config = {
  apiKey: "AIzaSyCtnnkI5WnROzwdlNfTpx3GZKgLfuFrnkg",
  authDomain: "autoclean-vue.firebaseapp.com",
  databaseURL: "https://autoclean-vue.firebaseio.com",
  projectId: "autoclean-vue",
  storageBucket: "autoclean-vue.appspot.com",
  messagingSenderId: "1062335017347",
  appId: "1:1062335017347:web:0934c0ec40a82ac4"
};

firebase.initializeApp(config);

// login with google
const provider = new firebase.auth.GoogleAuthProvider();

const googleAuth = firebase.auth().signInWithPopup(provider).then(function (result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  console.log(token)
  // The signed-in user info.
  var user = result.user;
  console.log(user);
  // ...
}).catch(function (error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

const db = firebase.firestore();

export default {
  db,
  googleAuth
}
