import { all, fork, takeLatest } from 'redux-saga/effects';


export default function* rootSaga() {
    yield all([
        fork(watchLogin)
    ]);
};