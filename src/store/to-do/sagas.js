import { all, call, takeLatest, put, take } from "redux-saga/effects";
import { TODO_LIST, setToDos, DELETE_TODO_ITEM } from "./actions";
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

export function* deleteToDoItem({ payload }) {
  try {
    yield call(toDoService.deleteItem, payload);
    history.push(ROUTES.DASHBOARD);
  } catch (e) {
    console.log(e);
  }
}

export default function* toDoSagas() {
  yield all([
    takeLatest(TODO_LIST, getToDos),
    takeLatest(DELETE_TODO_ITEM, deleteToDoItem),
  ]);
}
