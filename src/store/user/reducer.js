import { SET_USER } from "./actions";

const INTIAL_STATE = {
    user: null,
}

export const userReducer = (state = INTIAL_STATE, action) => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
}