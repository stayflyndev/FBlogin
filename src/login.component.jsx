import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Jumbotron from 'react-bootstrap/Jumbotron'
import {Container, Row} from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { auth, firestore } from './firebase';

// const App = () => (
//   <div className="App">
//       <Container fluid>
//       <Row>
    
//        <Col> Firebase Signin and Auth
//      
// </Col>
// </Row>
// </Container>
//   </div>
// );

// export default App;



class login extends Component {
    constructor(){
        super();

        this.state = ({
            email: '',
            password: ''
        })
    }

    onHandleChange = e => {
        // console.log(e.target.value);
        const {name, value} = e.target;
        this.setState({[name]: value})
        console.log({auth})
     
    }
    

    onHandleSubmit = e => {
        e.preventDefault();
        
    }


    render() {

        const {email, password} = this.state;
        return (
            <div>
                <Form>
    <Form.Group controlId="formBasicEmail" onSubmit={this.onHandleSubmit}>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onHandleChange}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword"> 
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onHandleChange}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
        )
    }
}

export default login
