import { createSelector } from 'reselect';

const userStateSelector = state => state.userReducer;

export const userSelector = createSelector(
  userStateSelector,
  state => state.user
);