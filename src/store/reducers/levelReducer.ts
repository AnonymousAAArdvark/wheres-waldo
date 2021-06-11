import { LevelState } from "../../types/state-types";
import { ILevels } from "../../types/level-types";

const initState: LevelState = { level: null };

const levelReducer = (state=initState, action: { type: string; payload?: ILevels }) => {
  switch(action.type) {
    case "LEVEL_SELECTED":
      console.log("level selected");
      return { ...state, level: action.payload };
    default:
      return { ...state };
  }
};

export default levelReducer;