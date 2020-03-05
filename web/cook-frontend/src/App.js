import React from 'react';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import Header from "./components/Header"
import Orders from "./components/Orders"
import MTasks from "./components/MTasks"
import MLogin from "./components/MLogin";
import CLogin from "./components/CLogin";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from "./components/Login"
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
  } from "react-router-dom";

function App() {
 return (
    <Router>
      <Header/>
      <div style={backgroundStyle}>
        <Container fluid>
          <Row>
            <Col sm={4} className="pt-3 px-3" style={navColStyle}>
              <Nav defaultActiveKey="/" className="flex-column rounded" style={sectionStyle}>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/cook">Cook</Nav.Link>
                <Nav.Link href="/manager">Manager</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                  Analytics
                </Nav.Link>
              </Nav>
            </Col>

            <Col className="pt-3 px-3">
              <div className="rounded" style={sectionStyle}>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/cook">
                    <Cook />
                  </Route>
                  <Route path="/manager">
                    <Manager />
                  </Route>
                  <Route path="/login_manager">
                    <MLogin/>
                  </Route>
                  <Route path="/login_cook">
                    <CLogin/>
                  </Route>
                </Switch>
                <footer style={footerStyle}>Powered by Auto Garcon</footer>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
    </Router>      
  );
}

export default App;

function Home() {
  return (
    <div>

            <div style={homeStyle}>
              <h2> Welcome to Auto Garcon </h2>
              <br/>
              <ul style={{'list-style':'none'}}>
                <li><Link to='/login_manager'> 
                  <button type="button"  style = {buttonStyle}>
                      Manager
                  </button>
                </Link></li>
                <br/>
                <li><Link to='/login_cook'>
                  <button type="button" style = {buttonStyle}>
                      Cook
                  </button>
                </Link></li>
              </ul>

              <hr />

            </div>

    </div>
  );
}

function Cook() {
  return (
    <div>
      <Orders/>
    </div>
  );
}

function Manager() {
  return (
    <div>
      <MTasks/>
    </div>
  );
}

var backgroundStyle = {
  'background-color': '#f1f1f1'
}

var sectionStyle = {
  'background-color': '#ffffff',
  'height': '100%'
}

var navColStyle = {
  'max-width': '200px'
}

var footerStyle = {
  'padding-bottom': '5px',
  'padding-right': '12px',
  'text-align': 'right'
}
var homeStyle = {
  'height' : '100vh',
  'fontWeight': '300',
  'width' : '80vw',
  'text-align' : 'center',
  'list-style': 'none',
  'background-color': '#ffffff',
  'text-size': '50pt'
};
var buttonStyle = {
  'width': '30vw',
  'fontWeight': '300',
  'border': 'solid 3px',
  'color': '#a8a7a',
  'background-color': 'rgba(11, 101, 138,.75)',
  'border-color' : 'rgba(11, 101, 138)',
  'height' : '7vh'
  
}