import { ILevels } from "../../types/level-types";
import { Dispatch } from "redux";

export const selectLevel = (level: ILevels) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: "LEVEL_SELECTED", payload: level });
  };
};