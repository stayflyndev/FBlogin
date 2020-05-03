import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container, Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { auth, firestore, createUserProfile, add } from './firebase';


class register extends Component {
  constructor() {
    super();
    
    this.state = ({
      displayName: '',
      email: '',
      password: '',
      confirmpassword: ''
    })
  }

      // reads the input values and sets the state

  onHandleChange = e => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    this.setState({ [name]: value })

  }

  /* grabs the value of the input fields
  create a user with auth method using the email/password
  then take that user and store it in the db
  store the email,password,and timestamp
  then alert success and clear the

  */
  onHandleSubmit = async e => {
    e.preventDefault();

    const {displayName, email, password, confirmpassword} = this.state

    try {
      const {user}  = await auth.createUserWithEmailAndPassword(email, password)
      await add(user, {displayName})
      this.setState({
       displayname: '',
       email: '',
       password: '',
       confirmPassword: ''
      }, () => console.log("fgg"))
     } catch (error) {
         console.log(error.message)
     }

  }

  render() {

    const { email, password, confirmpassword, displayname } = this.state;
    return (
      <div>
        <Container fluid>
          <Row>

            <Col> Register Account
<Form onSubmit={this.onHandleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter email" value={displayname} name='displayname' onChange={this.onHandleChange} />
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={email} name='email' onChange={this.onHandleChange} />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter email" value={password} name='password' onChange={this.onHandleChange} />
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter email" value={confirmpassword} name='confirmpassword' onChange={this.onHandleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default register






