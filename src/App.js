import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LoginModal from './LoginModal';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      loginClicked: false,
      signUpClicked: false
    };
  }

  handleClick = (name) => {
    if(name === 'login') {
      this.setState((state) => {
        return {
          loginClicked: !state.loginClicked,
          signUpClicked: false
        }
      });
    }
    else if(name === 'signUp') {
      this.setState((state) => {
        return {
          signUpClicked: !state.signUpClicked,
          loginClicked: false
        }
      });
    }
  }

  render() {
    return (
      <div className='user-info'>
      <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
        </Nav>
          <Nav.Link style = {{color: 'white'}} onClick = {() => this.handleClick('login')}>Login</Nav.Link>
          <Nav.Link style = {{color: 'white'}} onClick = {() => this.handleClick('signUp')}>Sign Up</Nav.Link>
      </Navbar>
      {
        (this.state.loginClicked || this.state.signUpClicked) 
          && 
        <LoginModal signUpClicked = {this.state.signUpClicked} 
                    loginClicked = {this.state.loginClicked} 
                    handleShow = {this.handleClick}/>
      }
    </div >
    );
  }
}

export default App;
