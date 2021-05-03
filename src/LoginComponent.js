import React from "react";
import MobileNumberComponent from "./MobileNumberComponent";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import {
  MOBILE_NUMBER_PLACEHOLDER,
  MOBILE_NUMBER_TEXT,
} from "./Constants/Constants";

const LoginComponent = ({ handleClick }) => (
  <React.Fragment>
    <MobileNumberComponent
      text={MOBILE_NUMBER_PLACEHOLDER}
      labelText={MOBILE_NUMBER_TEXT}
    />
    <Form>
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form>
    <div>
      <Nav.Link
        style={{
          color: "#0043ce",
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={() => handleClick()}
      >
        Forgot Password?
      </Nav.Link>
    </div>
  </React.Fragment>
);

export default LoginComponent;
