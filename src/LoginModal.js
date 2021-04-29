import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { signInWithGoogle } from "./firebase/firebase.utils";
import { auth } from "./firebase/firebase.utils";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MobileNumberComponent from "./MobileNumberComponent";

const LoginModal = ({ signUpClicked, loginClicked, handleShow }) => {
  const [currentUser, setcurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setcurrentUser(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <>
      <Modal show={signUpClicked || loginClicked} onHide={() => handleShow(signUpClicked ? 'signUp' : 'login')}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Navbar>
            <Nav.Link style={{ color: "black" }} onClick = {() => {signUpClicked && handleShow('login')}}>Login</Nav.Link>
              <Nav.Link style={{ color: "black" }} onClick = {() => {loginClicked && handleShow('signUp')}}>Sign Up</Nav.Link>
            </Navbar>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MobileNumberComponent />
          {
          !signUpClicked 
            && 
              <>
              <br />
              <label>Password</label>
              <br />
              <input className="password" type="password" placeholder="Password" />
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
          {currentUser ? (
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
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
