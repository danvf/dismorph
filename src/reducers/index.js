import { combineReducers } from "redux";
import statusReducer from "./statusReducer";

export default combineReducers({
    appStatus: statusReducer,
});
