import React from "react";
import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../types/state-types";
import { levels } from "../../utils/levels";
import { selectLevel } from "../../store/actions/levelActions";
import { ILevels } from "../../types/level-types";
import { useHistory } from "react-router";
import { LevelsContainer, Item, LevelsGrid, Title } from "../../styled-components/levels/StyledLevels";

const Levels = () => {
  const authState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const History = useHistory();
  
  const handleLevelClick = (level: ILevels) => {
    dispatch(selectLevel(level));
    History.push("/");
  };

  if(!authState.user) {
    return (
      <Title>Must be logged in to see this page.</Title>
    );
  }

  return (
    <LevelsContainer>
      <LevelsGrid>
        {Object.keys(levels).map((key, idx) => {
          return (
            <Item onClick={() => handleLevelClick(levels[key])} key={idx} >
              <Cards level={levels[key]} />
            </Item>
          );
        })}
      </LevelsGrid>
    </LevelsContainer>
  );
};

export default Levels;