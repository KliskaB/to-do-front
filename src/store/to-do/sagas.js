import { all, call, takeLatest, put } from "redux-saga/effects";
import {
  TODO_LIST,
  setToDos,
  DELETE_TODO_ITEM,
  GET_TODO,
  EDIT_TODO_ITEM,
  CREATE_TODO_ITEM,
  setToDo,
} from "./actions";
import { toDoService } from "../../services/to-do-service";
import { history } from "../../history";
import { ROUTES } from "../../constants";

export function* getToDos() {
  try {
    const { data } = yield call(toDoService.getAll);
    yield put(setToDos(data));
  } catch (e) {
    console.log(e);
  }
}

export function* getToDo({ payload }) {
  try {
    const { data } = yield call(toDoService.getItem, payload);
    yield put(setToDos([data]));
  } catch (e) {
    console.log(e);
  }
}

export function* deleteToDoItem({ payload }) {
  try {
    yield call(toDoService.deleteItem, payload);
    history.push(ROUTES.DASHBOARD);
  } catch (e) {
    console.log(e);
  }
}

export function* editToDoItem({ payload }) {
  try {
    yield call(toDoService.editItem, payload);
  } catch (e) {
    console.log(e);
  }
}

export function* createToDoItem({ payload }) {
  try {
    const { data } = yield call(toDoService.createItem, payload);
    // history.push(ROUTES.DASHBOARD);
    yield put(setToDo(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* toDoSagas() {
  yield all([
    takeLatest(TODO_LIST, getToDos),
    takeLatest(DELETE_TODO_ITEM, deleteToDoItem),
    takeLatest(GET_TODO, getToDo),
    takeLatest(EDIT_TODO_ITEM, editToDoItem),
    takeLatest(CREATE_TODO_ITEM, createToDoItem),
  ]);
}
