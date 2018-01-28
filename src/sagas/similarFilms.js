import { put, takeEvery, call } from 'redux-saga/effects';
import * as actions from '../actions/listActions';
import * as types from '../constants/List';
import * as resources from '../api/resources';

export function* getSimilarFilms(action) {
  yield put(actions.getListRequest());
  try {
    const json = yield call(resources.movieSimilar, action.payload);
    yield put(actions.getListSuccess(json));
  } catch (e) {
    yield put(actions.getListFailure(e.message));
  }
}

export default function* watchSimilarFilmsAsync() {
  yield takeEvery(types.GET_SIMILAR_FILMS_ASYNC, getSimilarFilms);
}
