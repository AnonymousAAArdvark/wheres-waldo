import React from "react";
import { Link } from "react-router-dom";
import { LinksWrapper, Button } from "../../styled-components/navbar/StyledAuthLinks";

const SignedOutLinks = () => {
  return (
    <LinksWrapper>
      <Link style={{ textDecoration: "none" }} to="/signup">
        <Button>Sign Up</Button>
      </Link>
      <Link style={{ textDecoration: "none"}} to="/signin">
        <Button> Sign In</Button>
      </Link>
    </LinksWrapper>
  );
};

export default SignedOutLinks;