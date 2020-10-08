import { all } from 'redux-saga/effects';
import toDoSagas from './to-do/sagas';
import userSagas from './user/sagas'

export default function* rootSaga() {
  yield all([
    userSagas(),
    toDoSagas()
  ]);
}
