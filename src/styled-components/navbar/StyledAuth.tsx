import styled from "styled-components";

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  width: fit-content;
  border: 2px solid lightgray;
  border-radius: 10px;
  padding: 1.5rem; 
  margin: 2rem 0;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  margin: .5rem 0;
`;

const Img = styled.img`
  width: 4.5rem;
  height: 4rem;
`;

const Input = styled.input`
  font-size: 1.4rem;
  padding: .3rem;
  margin: 1.2rem;
  border-radius: 5px;
  border: 2px solid #343434;
  background-color: #fcfcfc;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #fcfcfc inset;
  }

  &:-webkit-autofill::first-line {
    font-size: 1.4rem;
  }
`;

const SubmitButton = styled.button`
  font-size: 1.4rem;
  padding: .3rem;
  width: 15rem;
  border-radius: 5px;
  border: 2px solid #343434;
  margin: 1.3rem;
  background-color: #c4e2f3;

  &:hover {
    background-color: #b9d9ea;
  }

  &:active {
    background-color: #add2e5;
  }
`;

const ErrorMessage = styled.h5`
  font-size: 1rem;
  padding: 1rem 0 0 0;  
  color: red;
  text-align: center;
  width: 17rem;
`;

export { Form, Title, Input, SubmitButton, ErrorMessage, Img, FormContainer };