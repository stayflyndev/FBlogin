import React, {
  Component
} from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './home'
import header from './header.componnet'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  auth,
  firestore,
  firebase,
  createUserProfile, add
} from './firebase';
import route from 'react'


class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: null
    }
  }



  unsub = null

  componentWillMount() {
   this.unsub = auth.onAuthStateChanged(async (authenticated) => {
     if(authenticated){
      this.setState({ user : authenticated});
     } else {
      this.setState({ user : "hmm"});
     }
  
    
       // const user = await add(authenticated);
      // this.setState({ user }); 
      console.log(authenticated)

      // const user =  await add(authenticated)
  


      // authenticated
      //   ?
      //   this.setState(() => ({
      //       authenticated: true,
      //     },
      //     console.log("authenticated"))) :
      //   this.setState(() => ({
      //       authenticated: true,
      //     }, alert("You have signed out"),
      //     console.log("you have signed out")));
    });
  }


  componentWillUnmount() {
    this.unsub();
  }



  render() {
    return ( <div >
      <Home authenticated   />


      </div>
    )
  }
}

export default App