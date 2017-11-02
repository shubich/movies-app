import { put, takeEvery, call } from 'redux-saga/effects';
import * as types from '../constants/Films';
import * as Api from '../api';

export const getFilmsAsync = query => ({
  type: types.GET_FILMS_ASYNC,
  query,
});

const getFilmsRequest = query => ({
  type: types.GET_FILMS_REQUEST,
  query,
});

const getFilmsSuccess = results => ({
  type: types.GET_FILMS_SUCCESS,
  results,
});

const getFilmsFailure = error => ({
  type: types.GET_FILMS_FAILURE,
  error,
});

function* getFilms(action) {
  yield put(getFilmsRequest());
  try {
    const json = yield call(Api.requests.films, action.query);
    yield put(getFilmsSuccess(json.results));
  } catch (e) {
    yield put(getFilmsFailure(e.message));
  }
}

export default function* watchFilmsAsync() {
  yield takeEvery(types.GET_FILMS_ASYNC, getFilms);
}
