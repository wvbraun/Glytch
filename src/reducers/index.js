import { combineReducers } from "redux";
import glytch from "./glytchReducer";

const rootReducer = combineReducers({
  glytch: glytch
});

export default rootReducer;
