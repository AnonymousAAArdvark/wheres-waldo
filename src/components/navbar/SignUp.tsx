import React, { useState, useEffect } from "react";
import { signUp } from "../../store/actions/loginActions"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../types/state-types";
import { Redirect } from "react-router";
import Loader from "react-loader-spinner";
import { Form, Title, Input, SubmitButton, ErrorMessage, Img, FormContainer } from "../../styled-components/navbar/StyledAuth";
import TitleImg from "../../assets/title.webp";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch({ type: "CLEANUP_LOGIN_ERROR" });
  }, [dispatch]);

  useEffect(() => {
    setLoading(false);
  }, [authState.authError])

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    dispatch(signUp(email, password, username));
  };

  if(authState.user) return <Redirect to="/" />;

  return (
    <FormContainer>
      <Form
        onSubmit={(e: React.FormEvent) => submitForm(e)}
        autoComplete="off"
      >
        <Title>Sign Up <Img src={TitleImg} /></Title>
        <Input
          id="username"
          placeholder="Username"
          onChange={(e: { target: { value: any; }; }) => setUsername(e.target.value)}
          required
        />
        <Input
          id="email"
          placeholder="Email"
          type="email"
          onChange={(e: { target: { value: any; }; }) => setEmail(e.target.value)}
          required
        />
        <Input
          id="password"
          placeholder="Password"
          type="password"
          onChange={(e: { target: { value: any; }; }) => setPassword(e.target.value)}
          required
        />
        <SubmitButton type="submit">Submit</SubmitButton>
        {authState.authError && !loading && (
          <ErrorMessage>{authState.authError.message}</ErrorMessage>
        )}
        {loading &&
          <div style={{ paddingTop: "1rem" }}>
            <Loader
              type="TailSpin"
              color="#000000"
              height={50}
              width={50}
            />
          </div>
        }
      </Form>
    </FormContainer>
  );
};

export default SignUp;