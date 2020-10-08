import { all, call, takeLatest, put } from "redux-saga/effects";
import { TODO_LIST, setToDos } from "./actions";
import { toDoService } from "../../services/to-do-service";

export function* getToDos() {
  try {
    const { data } = yield call(toDoService.getAll);
    yield put(setToDos(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* toDoSagas() {
  yield all([takeLatest(TODO_LIST, getToDos)]);
}
