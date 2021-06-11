import authReducer from "./authReducer";
import levelReducer from "./levelReducer";
import { combineReducers } from "redux";

export default combineReducers({
  auth: authReducer,
  level: levelReducer,
});