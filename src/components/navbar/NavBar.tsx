import React from "react";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { Link } from "react-router-dom";
import { RootState } from "../../types/state-types";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/all";
import { AppBar, ToolBar, Button, Title, TitleContainer } from "../../styled-components/navbar/StyledNavBar";

const NavBar = () => {
  const authState = useSelector((state: RootState) => state.auth);

  return (
    <AppBar>
      <ToolBar>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Link to="/levels">
            <Button>Levels</Button>
          </Link>
          <Link to="/leaderboard">
            <Button>Leaderboard</Button>
          </Link>
        </div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <TitleContainer>
            <FaSearch />
            <Title>Where's Waldo?</Title>
          </TitleContainer>
        </Link>
        {authState.user ? <SignedInLinks /> : <SignedOutLinks />}
      </ToolBar>
    </AppBar>
  );
};

export default NavBar;