import { all, call, takeLatest, put } from 'redux-saga/effects';
import {userService} from '../../services/user-service'
import { GET_USER, LOGIN_ACTION, REGISTER_ACTION, setUser } from './actions';
import { history } from '../../history';
import { ROUTES } from '../../constants';

export function* registerUser({ payload }) {
    try {
        yield call(userService.register, payload);
        history.push(ROUTES.LOGIN);
    } catch(e) {
        console.log(e);
    }
}

export function* loginUser({ payload }) {
    try {
        yield call(userService.login, payload);
        const { data } = yield call(userService.getMe);
        yield put(setUser(data));
        history.push(ROUTES.DASHBOARD);
    } catch (e) {
        console.log(e);
    }
}

export function* getUser({ payload }) {
    try {
        const retVal = yield call(userService.getMeDef, payload);
        if(!retVal) {
            history.push(ROUTES.LOGIN);
            return
        }
        yield put(setUser(retVal.data));
        history.push(ROUTES.DASHBOARD);
    } catch (e) {
        console.log(e);
    }
}

export default function* userSagas() {
    yield all([
        takeLatest(LOGIN_ACTION, loginUser),
        takeLatest(GET_USER, getUser),
        takeLatest(REGISTER_ACTION, registerUser)
    ]);
}

