import { all, call, takeLatest, put } from 'redux-saga/effects';
import {userService} from '../../services/user-service'
import { LOGIN_ACTION, REGISTER_ACTION, setUser } from './actions';
import { history } from '../../history'

export function* registerUser({ payload }) {
    try {
        const data = yield call(userService.register, payload);
        console.log('Register saga', data);
        history.push('/users/login');
    } catch(e) {
        console.log(e);
    }
}

export function* loginUser({ payload }) {
    try {
        yield call(userService.login, payload);
        const user = yield call(userService.getMe);
        yield put(setUser(user));
        history.push('/user-dashboard');
    } catch (e) {
        console.log(e);
    }
}

export default function* userSagas() {
    yield all([
        takeLatest(LOGIN_ACTION, loginUser),
        takeLatest(REGISTER_ACTION, registerUser)
    ]);
}

