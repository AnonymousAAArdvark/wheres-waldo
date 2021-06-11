import styled from "styled-components";

const LinksWrapper = styled.div`
  display: flex;
  margin-right: 1rem;
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f05b5b;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  @media (max-width: 468px) {
    display: none;
  }
`;

const AvatarChar = styled.p`
  color: white;
  text-align: center;
  font-size: 1.5rem;
  padding-top: .1rem;
`;

const Button = styled.button`
  margin: .5rem;
  background: none;
  border: none;
  font-size: 1.2rem;
`;

export { LinksWrapper, Avatar, Button, AvatarChar };

