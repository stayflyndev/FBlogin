
import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './home'
import header from './header.componnet'
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth, firestore, firebase } from './firebase';


 class App extends Component {
   constructor(){
     super();
     this.state={
       currentUser: null
     }
   }

   componentWillMount(){
    const {currentUser} = this.state
     if(!currentUser){
       auth.onAuthStateChanged(user => {
         console.log(user)
       })
       console.log("test")
     }
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


