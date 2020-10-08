import { SET_TO_DO_LIST } from "./actions";

const INTIAL_STATE = {
  todo_list: [],
};

export const toDoReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SET_TO_DO_LIST:
      return {
        ...state,
        todo_list: action.payload,
      };
    default:
      return state;
  }
};
