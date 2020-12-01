import { combineReducers } from "redux";
import statusReducer from "./gameReducer";

export default combineReducers({
    game: statusReducer,
});
