import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Jumbotron from 'react-bootstrap/Jumbotron'
import {Container, Row} from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { auth, firestore, provider } from './firebase';
// import {googleSignIn} from './firebase'

class login extends Component {
    constructor(){
        super();

        this.state = ({
            email: '',
            password: ''
        })
    }

    // reads the input values and sets the state
    onHandleChange = e => {
        // console.log(e.target.value);
        const {name, value} = e.target;
        this.setState({[name]: value})
        }
    
    // logs in the user
    onHandleSubmit = async e => {
        e.preventDefault();
            
        const {email, password} = this.state
   try{
    const {user} = auth.signInWithEmailAndPassword(email, password)
     console.log("You are now signed in")
     
   }catch(error){
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
     };
    }



    googleSignIn= () => {
        
        auth.signInWithRedirect(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log("result", )
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      })};
    
      googleSignOut = () => {
      auth.signOut().then(function() {
          
      }).catch(function(error) {
        // An error happened.
      });
    }
    


    render() {
        const googleSignIn = this.state

        const {email, password} = this.state;
        return (
            <div>
                <Form onSubmit={this.onHandleSubmit}>
    <Form.Group controlId="formBasicEmail" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={this.onHandleChange}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword"> 
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.onHandleChange}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<Button variant="primary" type="submit" onClick={this.googleSignIn} >
    Google Sign In 
  </Button>
  <Button variant="primary" type="submit" onClick={this.googleSignOut} >
    Google Sign out 
  </Button>
            </div>
        )
    }
}

export default login
