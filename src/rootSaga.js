import { all } from 'redux-saga/effects';

import { saga as usersSaga } from './api';

export default function* rootSaga() {
  yield all([
    usersSaga(),
  ]);
}
