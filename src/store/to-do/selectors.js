import { createSelector } from "reselect";

const toDoStateSelector = (state) => state.toDoReducer;

export const toDoSelector = createSelector(
  toDoStateSelector,
  (state) => state.todos
);

export const getToDoByIdSelector = (id) =>
  createSelector(toDoSelector, (todos) =>
    todos.find((todo) => {
      return todo.id.toString() === id;
    })
  );
