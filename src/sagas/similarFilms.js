import { put, takeEvery, call } from 'redux-saga/effects';
import * as actions from '../actions/getSimilarFilms';
import * as types from '../constants/Films';
import * as Api from '../lib/api';

export function* getSimilarFilms(action) {
  yield put(actions.getSimilarFilmsRequest());
  try {
    const json = yield call(Api.requests.similar, action.id);
    yield put(actions.getSimilarFilmsSuccess(json.results));
  } catch (e) {
    yield put(actions.getSimilarFilmsFailure(e.message));
  }
}

export default function* watchSimilarFilmsAsync() {
  yield takeEvery(types.GET_SIMILAR_FILMS_ASYNC, getSimilarFilms);
}
