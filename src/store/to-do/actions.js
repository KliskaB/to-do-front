export const TODO_LIST = "TODO_LIST";
export const SET_TO_DO_LIST = "SET_TO_DO_LIST";

export const toDoList = (payload) => ({
  type: TODO_LIST,
  payload,
});

export const setToDos = (payload) => ({
  type: SET_TO_DO_LIST,
  payload,
});
