import { createSelector } from 'reselect';

const toDoStateSelector = state => state.toDoReducer;

export const toDoSelector = createSelector(
    toDoStateSelector,
    state => state.todo_list
);