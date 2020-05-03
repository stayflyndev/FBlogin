
import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './home'
import header from './header.componnet'
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth, firestore, firebase, createUserProfile } from './firebase';


 class App extends Component {
   constructor(){
     super();
     this.state={
       currentUser: ''
     }
   }

   componentWillMount(){
    auth.onAuthStateChanged(async authuser => {
      createUserProfile(authuser)

      if(authuser){
        // check for updates
        const userReference = await createUserProfile(authuser);
        console.log(authuser)
        userReference.onSnapshot(snapshot =>
        {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => {
            console.log(this.state)

          })
        })
      }
      this.setState({currentUser: authuser})
    })


    }

  render() {
    return (
      <div>
              <Home />

        
      </div>
    )
  }
}

export default App


