import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container, Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { auth, firestore } from './firebase';

class register extends Component {
  constructor() {
    super();

    this.state = ({
      displayname: '',
      email: '',
      password: '',
      confirmpassword: ''
    })
  }

  onHandleChange = e => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    this.setState({ [name]: value })
    console.log(value)
  }


  onHandleSubmit = e => {
    e.preventDefault();

  }


  render() {

    const { email, password, confirmpassword, displayname } = this.state;
    return (
      <div>
        <Container fluid>
          <Row>

            <Col> Register Account
<Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter email" value={displayname} name='displayname' onChange={this.onHandleChange} />
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={email} name='email' onChange={this.onHandleChange} />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter email" name={password} onChange={this.onHandleChange} />
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter email" name={confirmpassword} onChange={this.onHandleChange} />
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






