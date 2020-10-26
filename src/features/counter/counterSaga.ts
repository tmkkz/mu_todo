import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import { incrementByAmount } from './counterSlice';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

function* incrementAsyncSaga(action: PayloadAction<number>) {
  yield delay(1000);
  console.log('call saga');
  yield put(incrementByAmount(action.payload))
}

export default function* watchIncrementAsync() {
  yield takeEvery('counter/incrementAsync', incrementAsyncSaga);
}