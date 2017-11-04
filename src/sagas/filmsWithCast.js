import { put, takeEvery, call } from 'redux-saga/effects';
import * as actions from '../actions/getFilmsWithCast';
import * as types from '../constants/Films';
import * as Api from '../lib/api';

export function* getFilmsWithCast(action) {
  yield put(actions.getFilmsWithCastRequest());
  try {
    const json = yield call(Api.requests.filmsWithCast, action.id);
    yield put(actions.getFilmsWithCastSuccess(json.results));
  } catch (e) {
    yield put(actions.getFilmsWithCastFailure(e.message));
  }
}

export default function* watchFilmsWithCastAsync() {
  yield takeEvery(types.GET_FILMS_WITH_CAST_ASYNC, getFilmsWithCast);
}
