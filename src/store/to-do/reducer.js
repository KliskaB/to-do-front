import { SET_TO_DO_LIST } from "./actions";

const INTIAL_STATE = {
  todos: [],
};

export const toDoReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SET_TO_DO_LIST:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};
