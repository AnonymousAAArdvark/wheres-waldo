import styled from "styled-components";

const AppBar = styled.nav`
  position: static;
`;

const ToolBar = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid lightgray;
  background-color: #f8f8f8;
`;

const Button = styled.button`
  margin: .5rem;
  background: none;
  border: none;
  font-size: 1.2rem;
`;

const TitleContainer = styled.div`
  display: flex;
  position: absolute;
  top: 2px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: #e04040;

  align-items: center;
  @media (max-width: 900px) {
    position: relative;
  }
  @media (max-width: 750px) {
    display: none;
  }
`;

const Title = styled.h3`
  padding-left: .5rem;
  color: #1c83e7;
`;

export { AppBar, Title, ToolBar, Button, TitleContainer };