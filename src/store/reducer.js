import { combineReducers } from 'redux';
import { userReducer } from './user/reducer';
import { toDoReducer } from './to-do/reducer';

export default combineReducers({
    userReducer,
    toDoReducer
});