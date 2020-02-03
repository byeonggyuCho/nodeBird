import { all, call, takeLatest, put, fork, take, delay, takeLatest, takeEvery } from 'redux-saga/effects';
import { LOGIN_IN, LOGIN_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user'

const HELLO_SAGA = 'HELLO_SAGA';

function loginAPI() {
    // 서버에 요청을 보내는 부분
}

function* login() {
    try {
        yield call(loginAPI);
        yield put({
            type: LOGIN_IN_SUCCESS
        });
    } catch (e) {   // 로그인 실패
        console.error(e);
        yield put({ // Dispatch
            type: LOG_IN_FAILURE
        })
    }
}

function* watchLogin() {

    while (true) {
        yield take(LOG_IN);
        yield delay(2000);
        yield put({
            type: LOG_IN_SUCCESS,
        });
    }
}



export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchHello),
    ])
};