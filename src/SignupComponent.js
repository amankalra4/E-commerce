import React from 'react';
import MobileNumberComponent from './MobileNumberComponent';
import { MOBILE_NUMBER_PLACEHOLDER, MOBILE_NUMBER_TEXT } from "./Constants/Constants";

const SignupComponent = () => (
    <MobileNumberComponent text = {MOBILE_NUMBER_PLACEHOLDER} labelText = {MOBILE_NUMBER_TEXT} />
)

export default SignupComponent;
