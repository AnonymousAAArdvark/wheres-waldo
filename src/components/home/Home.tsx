import React from "react";
import { useSelector } from "react-redux";
import { RootState, LevelState, AuthState } from "../../types/state-types";
import NotSigned from "./NotSigned";
import Game from "./Game";
import Levels from "../levels/Levels";

const Home = () => {
  const authState: AuthState = useSelector((state: RootState) => state.auth);
  const levelState: LevelState = useSelector((state: RootState) => state.level);
  if(!authState.user) {
    return <NotSigned />;
  }
  else {
    return levelState.level ? <Game level={levelState.level} /> : <Levels />;
  }
};

export default Home;