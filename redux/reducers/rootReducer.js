import { combineReducers } from "redux";
import userReducer from "./authReducer";

const rootReducer = combineReducers({ user: userReducer });
export default rootReducer;
