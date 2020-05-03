// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");


// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STRG_BUCKT,
  messagingSenderId: process.env.REACT_APP_MSSG_SNDR_ID,
  appId: process.env.REACT_APP_APP_ID
//   measurementId: "G-FJFM9Q2KLL"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 export const auth = firebase.auth();
  export const firestore = firebase.firestore();

//  GOOGLE AUTH SETUP

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
  });


  export const createUserProfile = async (authuser, additionaldata) => {
    if(!authuser) return;
    
    // see if already exists
    const userReference = firestore.doc(`users/${authuser.uid}`)
    const snapShot = await userReference.get()
    // see if there is data
    console.log(snapShot)
    
    if(!snapShot.exists) {
      // from the userRef
      const {displayName, email } = authuser
      const createdAt = new Date;
    
      try{
        //create db entry with key values
        // 
        await userReference.set({
          displayName,
          email,
          createdAt,
          ...additionaldata,
        })
      }
        catch(error)
        {
          console.log("error creating user " + error.message)
    
        }
      }
      return userReference
    }
  
// export const googleSignIn = firebase.auth().signInWithPopup(provider).then(function(result) {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = result.credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     console.log("result", result)
//     // ...
//   }).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });



  export default firebase;