import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login.component'
import Register from './register.component'

import header from './header.componnet'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap'
import Col from 'react-bootstrap/Col'



function App() {
  return (
    <div className="App">
        <Container>
            <Row>
                <Col>
                <Login />
                </Col>
                <Col>
      <Register />
                </Col>
            </Row>
        </Container>
   
    </div>
  );
}

export default App;
