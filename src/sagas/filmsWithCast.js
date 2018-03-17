import { put, takeEvery, call } from 'redux-saga/effects';
import actions from '../store/modules/list/actions';
import TYPES from '../store/modules/list/action-types';
import * as resources from '../api/resources';

export function* getFilmsWithCast(action) {
  yield put(actions.getListRequest());
  try {
    const json = yield call(resources.discoverMovie, action.payload);
    yield put(actions.getListSuccess(json));
  } catch (e) {
    yield put(actions.getListFailure(e.message));
  }
}

export default function* watchFilmsWithCastAsync() {
  yield takeEvery(TYPES.GET_FILMS_WITH_CAST_ASYNC, getFilmsWithCast);
}
