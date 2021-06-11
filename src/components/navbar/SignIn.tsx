import React, { useState, useEffect } from "react";
import { signIn } from "../../store/actions/loginActions";
import { RootState } from "../../types/state-types";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import Loader from "react-loader-spinner";
import TitleImg from "../../assets/title.webp";
import { ErrorMessage, Form, Input, SubmitButton, Title, Img, FormContainer } from "../../styled-components/navbar/StyledAuth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    dispatch(signIn(email, password));
  };

  if(authState.user) return <Redirect to="/" />;

  return (
    <FormContainer>
      <Form
        onSubmit={(e: React.FormEvent) => submitForm(e)}
        autoComplete="off"
      >
        <Title>Sign In <Img src={TitleImg} /></Title>
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

export default SignIn;