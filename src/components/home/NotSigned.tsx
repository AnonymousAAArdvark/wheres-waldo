import React from "react";
import SignUp from "../navbar/SignUp";
import { Link } from "react-router-dom";
import { NotSignedWrapper, SignInLink } from "../../styled-components/home/StyledNotSigned";

const NotSigned = () => {
  return (
    <NotSignedWrapper>
      <SignUp />
      <SignInLink>
        Already have an account? <Link to="/signin">Sign In</Link>
      </SignInLink>
    </NotSignedWrapper>
  );
};

export default NotSigned;