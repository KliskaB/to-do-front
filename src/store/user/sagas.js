import { all, call, takeLatest, put } from 'redux-saga/effects';
import {userService} from '../../services/user-service'
import { LOGIN_ACTION, setUser } from './actions';

export function* loginUser({ payload }) {
    try {
        yield call(userService.login, payload);
        const user = yield call(userService.getMe);
        yield put(setUser(user));
    } catch (e) {
        console.log(e);
    }
}

export default function* userSagas() {
    yield all([
        takeLatest(LOGIN_ACTION, loginUser)
    ]);
}