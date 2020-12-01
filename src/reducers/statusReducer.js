import { CONSTANTS } from "../actions";

const statusReducer = (state = "MENU", action) => {
    switch (action.type) {
        case CONSTANTS.START_GAME:
            return "LEVEL";
        default:
            return state;
    }
};

export default statusReducer;
