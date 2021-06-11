import React from "react";
import { RootState, AuthState } from "../../types/state-types";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/loginActions";
import { LinksWrapper, Avatar, Button, AvatarChar } from "../../styled-components/navbar/StyledAuthLinks";

const SignedInLinks = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  const authState: AuthState = useSelector((state: RootState) => state.auth);
  const initialName = authState.user!.username[0].toUpperCase();

  return (
    <LinksWrapper>
      <Avatar><AvatarChar>{initialName}</AvatarChar></Avatar>
      <Button onClick={handleClick}>Log out</Button>
    </LinksWrapper>
  );
};

export default SignedInLinks;