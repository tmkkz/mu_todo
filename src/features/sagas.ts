import { fork, all } from 'redux-saga/effects';
import watchIncrementAsyncSaga from './counter/counterSaga';

function* helloSaga() {
  console.log('Hello Saga');
}

export default function* rootSaga() {
  yield all([
    fork(helloSaga),
    fork(watchIncrementAsyncSaga)
  ])
}