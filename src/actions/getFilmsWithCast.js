import { put, takeEvery, call } from 'redux-saga/effects';
import * as types from '../constants/Films';
import * as Api from '../api';

export const getFilmsWithCastAsync = id => ({
  type: types.GET_FILMS_WITH_CAST_ASYNC,
  id,
});

const getFilmsWithCastRequest = id => ({
  type: types.GET_FILMS_WITH_CAST_REQUEST,
  id,
});

const getFilmsWithCastSuccess = results => ({
  type: types.GET_FILMS_WITH_CAST_SUCCESS,
  results,
});

const getFilmsWithCastFailure = error => ({
  type: types.GET_FILMS_WITH_CAST_FAILURE,
  error,
});

function* getFilmsWithCast(action) {
  yield put(getFilmsWithCastRequest());
  try {
    const json = yield call(Api.requests.filmsWithCast, action.id);
    yield put(getFilmsWithCastSuccess(json.results));
  } catch (e) {
    yield put(getFilmsWithCastFailure(e.message));
  }
}

export default function* watchFilmsWithCastAsync() {
  yield takeEvery(types.GET_FILMS_WITH_CAST_ASYNC, getFilmsWithCast);
}