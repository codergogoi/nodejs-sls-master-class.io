import { combineReducers } from "redux";
import userReducer from "./userSlice";

export const rootReducer = combineReducers({ userReducer });
