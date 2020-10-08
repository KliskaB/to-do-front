export const TODO_LIST = "TODO_LIST";
export const SET_TO_DO_LIST = "SET_TO_DO_LIST";
export const DELETE_TODO_ITEM = "DELETE_TODO_ITEM";

export const toDoList = (payload) => ({
  type: TODO_LIST,
  payload,
});

export const setToDos = (payload) => ({
  type: SET_TO_DO_LIST,
  payload,
});

export const deleteToDoItem = (payload) => ({
  type: DELETE_TODO_ITEM,
  payload,
});
