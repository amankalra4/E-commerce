import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import { signInWithGoogle } from "./firebase/firebase.utils";
import { auth } from "./firebase/firebase.utils";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'
import "./App.css";
import MobileNumberComponent from "./MobileNumberComponent";
import { MOBILE_NUMBER_PLACEHOLDER,
        MOBILE_NUMBER_TEXT,
        FORGOT_PASSWORD_MOBILE_NUMBER_PLACEHOLDER,
        FORGOT_PASSWORD_MOBILE_NUMBER_TEXT } from "./Constants/Constants";

const LoginModal = ({ handleShow, ...rest }) => {
// const LoginModal = ({ heading, handleShow }) => {
  const [currentUser, setcurrentUser] = useState(null);
  const [forgotPassOnClick, setForgotPassOnClick] = useState(false);
  console.log('resttt', rest);
  
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
    <>
      <Modal show={rest.signUpClicked || rest.loginClicked} onHide={() => handleShow(rest.signUpClicked ? 'signUp' : 'login')}>
        <Modal.Header closeButton>
          <Modal.Title style = {{width: '100%'}}>
              {
                !forgotPassOnClick
                  ?
                <>
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
                </>
                  :
                  <>
                    <div onClick = {cancelForgotPass} style = {{fontSize: '15px', fontWeight: '200', fontFamily: 'Roboto,sans-serif', cursor: 'pointer'}}>&#8592; Go Back</div>
                    <div>
                    <Nav.Link 
                            style = {{color: 'black', fontSize: '25px', fontWeight: '400', fontFamily: 'Roboto,sans-serif', cursor: 'unset'}}
                            >
                        Forgot Password
                    </Nav.Link>
                    </div>
                  </>
              }
            {/* </Navbar> */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            !forgotPassOnClick
              ?
              <>
                <MobileNumberComponent text = {MOBILE_NUMBER_PLACEHOLDER} labelText = {MOBILE_NUMBER_TEXT} />
                {
                !rest.signUpClicked 
                  && 
                    <>
                    <div>Password</div>
                    <div><input className="password" type="password" placeholder="Password" /></div>
                    <div>
                      <Nav.Link 
                                style = {{color: '#0043ce', textDecoration: 'underline', cursor: 'pointer'}}
                                onClick = {forgotPasswordClick}>
                          Forgot Password?
                      </Nav.Link>
                    </div>
                    </>
                }
              </>
            :
              <>
                <MobileNumberComponent text = {FORGOT_PASSWORD_MOBILE_NUMBER_PLACEHOLDER} labelText = {FORGOT_PASSWORD_MOBILE_NUMBER_TEXT} />
                <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px'}}>
                  <Button variant="primary">Send</Button>
                </div>
              </>
          }
          
        </Modal.Body>
        <Modal.Footer
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!forgotPassOnClick && (currentUser ? (
            <div>
              <div>
                <img src={currentUser.photoURL} alt="profileImage" />
              </div>
              <div>Name: {currentUser.displayName}</div>
              <div>Email: {currentUser.email}</div>
              <button onClick={() => auth.signOut()}>LOG OUT</button>
            </div>
          ) : (
            <div id="gSignInWrapper" onClick={signInWithGoogle}>
              <div id="customBtn" className="customGPlusSignIn">
                <span className="icon"></span>
                <span className="buttonText">Sign In</span>
              </div>
            </div>
          ))}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
