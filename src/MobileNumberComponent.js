import React from "react";
import Form from "react-bootstrap/Form";

const MobileNumberComponent = ({ text, labelText }) => {
  return (
    <Form>
      <Form.Label>{labelText}</Form.Label>
      <Form.Control type="text" placeholder={text} />
    </Form>
  );
};

export default MobileNumberComponent;
