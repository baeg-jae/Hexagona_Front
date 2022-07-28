import { combineReducers } from "redux";
import userReducer from "./user";
import chatReducer from "./chat";
import modalReducer from "./modal";

const rootReducer = combineReducers({
  userReducer,
  chatReducer,
  modalReducer,
});

export default rootReducer;
