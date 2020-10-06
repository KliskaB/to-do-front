import { all, call, takeLatest } from 'redux-saga/effects';
import {userService} from '../../services/user-service'
import { LOGIN_ACTION } from './actions';

export function* loginUser({ payload }) {
    try {
        const data = yield call(userService.login, payload);
        // const { data } = yield call(userService.getMe);

        // yield put(setUser(data));

        console.log(data);
    } catch (e) {
        console.log(e);
    }
}

export default function* userSagas() {
    yield all([
        takeLatest(LOGIN_ACTION, loginUser)
    ]);
}