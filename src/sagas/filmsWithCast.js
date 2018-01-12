import { put, takeEvery, call } from 'redux-saga/effects';
import * as actions from '../actions/getFilms';
import * as types from '../constants/Films';
import * as Api from '../lib/api';

export function* getFilmsWithCast(action) {
  yield put(actions.getFilmsRequest());
  try {
    const json = yield call(Api.requests.filmsWithCast, action.payload);
    yield put(actions.getFilmsSuccess(json));
  } catch (e) {
    yield put(actions.getFilmsFailure(e.message));
  }
}

export default function* watchFilmsWithCastAsync() {
  yield takeEvery(types.GET_FILMS_WITH_CAST_ASYNC, getFilmsWithCast);
}
