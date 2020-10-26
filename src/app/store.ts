import { configureStore, getDefaultMiddleware, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import counterReducer from '../features/counter/counterSlice';
import rootSaga from '../features/sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

