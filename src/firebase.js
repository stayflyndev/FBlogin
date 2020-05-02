// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");


// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: REACT_APP_APIKEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STRG_BUCKT,
  messagingSenderId: REACT_APP_MSSG_SNDR_ID,
  appId: REACT_APP_APP_ID,
//   measurementId: "G-FJFM9Q2KLL"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 export const auth = firebase.auth();
  export const firestore = firebase.firestore();

//   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });

//   auth.onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//       console.log("signed in")
//     } else {
//       // No user is signed in.
//     }
//   });

  export default firebase;