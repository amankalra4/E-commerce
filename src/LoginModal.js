import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import LoginComponent from "./LoginComponent";
import SignupComponent from "./SignupComponent";
import ForgotPasswordComponent from "./ForgotPasswordComponent";
import { signInWithGoogle } from "./firebase/firebase.utils";
import { auth } from "./firebase/firebase.utils";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const LoginModal = ({ handleShow, ...rest }) => {
  const [currentUser, setcurrentUser] = useState(null);
  const [forgotPassOnClick, setForgotPassOnClick] = useState(false);
  
  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setcurrentUser(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  const forgotPasswordClick = () => {
    setForgotPassOnClick(true);
  }

  const cancelForgotPass = () => {
    setForgotPassOnClick(false);
  }

  return (
    <React.Fragment>
      <Modal 
              show = { rest.signUpClicked || rest.loginClicked } 
              onHide={() => handleShow(rest.signUpClicked ? 'signUp' : 'login')}>
        <Modal.Header closeButton>
          <Modal.Title style = {{width: '100%'}}>
              {
                forgotPassOnClick
                  ?
                <React.Fragment>
                  <div onClick = {cancelForgotPass} style = {{fontSize: '15px', fontWeight: '200', fontFamily: 'Roboto,sans-serif', cursor: 'pointer'}}>&#8592; Go Back</div>
                  <div>
                  <Nav.Link 
                          style = {{color: 'black', fontSize: '25px', fontWeight: '400', fontFamily: 'Roboto,sans-serif', cursor: 'unset'}}
                          >
                      Forgot Password
                  </Nav.Link>
                  </div>
                </React.Fragment>
                  :
                <React.Fragment>
                  <Nav.Link 
                          style={{ color: "black", float: 'left' }} 
                          onClick = {() => {rest.signUpClicked && handleShow('login')}}>
                      Login
                  </Nav.Link>
                  <Nav.Link 
                            style={{ color: "black" }} 
                            onClick = {() => {rest.loginClicked && handleShow('signUp')}}>
                        Sign Up
                  </Nav.Link>
                </React.Fragment>
              }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            forgotPassOnClick
              ?
            <ForgotPasswordComponent />
              :
            <React.Fragment>
              {rest.loginClicked && <LoginComponent handleClick = {forgotPasswordClick} />}
              {rest.signUpClicked && <SignupComponent />}
            </React.Fragment>
          }
        </Modal.Body>
        {
          !forgotPassOnClick
            &&
          <Modal.Footer style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            {
              currentUser 
                ? 
              <div>
                <div>
                  <img src={currentUser.photoURL} alt="profileImage" />
                </div>
                <div>Name: {currentUser.displayName}</div>
                <div>Email: {currentUser.email}</div>
                <button onClick={() => auth.signOut()}>LOG OUT</button>
              </div>
                :
              <div id="gSignInWrapper" onClick={signInWithGoogle}>
                <div id="customBtn" className="customGPlusSignIn">
                  <span className="icon"></span>
                  <span className="buttonText">Sign In</span>
                </div>
              </div>
            }
          </Modal.Footer>
        }
      </Modal>
    </React.Fragment>
  );
};

export default LoginModal;
