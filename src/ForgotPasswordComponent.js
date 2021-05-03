import React from "react";
import MobileNumberComponent from "./MobileNumberComponent";
import {
  FORGOT_PASSWORD_MOBILE_NUMBER_PLACEHOLDER,
  FORGOT_PASSWORD_MOBILE_NUMBER_TEXT,
} from "./Constants/Constants";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ForgotPasswordComponent = () => (
  <React.Fragment>
    <MobileNumberComponent
      text={FORGOT_PASSWORD_MOBILE_NUMBER_PLACEHOLDER}
      labelText={FORGOT_PASSWORD_MOBILE_NUMBER_TEXT}
    />
    <Form>
      <Button variant="primary" block className = 'mt-3 mb-2'>
        Send
      </Button>
      <Form.Text className="text-muted text-center">
        We will send you a Link/OTP to reset the password
      </Form.Text>
    </Form>
  </React.Fragment>
);

export default ForgotPasswordComponent;
