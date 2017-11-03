import { put, takeEvery, call } from 'redux-saga/effects';
import * as types from '../constants/Films';
import * as Api from '../lib/api';

export const getSimilarFilmsAsync = id => ({
  type: types.GET_SIMILAR_FILMS_ASYNC,
  id,
});

const getSimilarFilmsRequest = id => ({
  type: types.GET_SIMILAR_FILMS_REQUEST,
  id,
});

const getSimilarFilmsSuccess = results => ({
  type: types.GET_SIMILAR_FILMS_SUCCESS,
  results,
});

const getSimilarFilmsFailure = error => ({
  type: types.GET_SIMILAR_FILMS_FAILURE,
  error,
});

function* getSimilarFilms(action) {
  yield put(getSimilarFilmsRequest());
  try {
    const json = yield call(Api.requests.similar, action.id);
    yield put(getSimilarFilmsSuccess(json.results));
  } catch (e) {
    yield put(getSimilarFilmsFailure(e.message));
  }
}

export default function* watchSimilarFilmsAsync() {
  yield takeEvery(types.GET_SIMILAR_FILMS_ASYNC, getSimilarFilms);
}
