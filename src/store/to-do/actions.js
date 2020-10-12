export const TODO_LIST = "TODO_LIST";
export const SET_TO_DO_LIST = "SET_TO_DO_LIST";
export const DELETE_TODO_ITEM = "DELETE_TODO_ITEM";
export const GET_TODO = "GET_TODO";
export const EDIT_TODO_ITEM = "EDIT_TODO_ITEM";
export const CREATE_TODO_ITEM = "CREATE_TODO_ITEM";
export const SET_TO_DO = "SET_TO_DO";

export const toDoList = (payload) => ({
  type: TODO_LIST,
  payload,
});

export const getToDo = (payload) => ({
  type: GET_TODO,
  payload,
});

export const setToDos = (payload) => ({
  type: SET_TO_DO_LIST,
  payload,
});

export const setToDo = (payload) => ({
  type: SET_TO_DO,
  payload,
});

export const deleteToDoItem = (payload) => ({
  type: DELETE_TODO_ITEM,
  payload,
});

export const editToDoItem = (payload) => ({
  type: EDIT_TODO_ITEM,
  payload,
});

export const createToDoItem = (payload) => ({
  type: CREATE_TODO_ITEM,
  payload,
});
