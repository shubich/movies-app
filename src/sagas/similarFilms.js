import { put, takeEvery, call } from 'redux-saga/effects';
import actions from '../store/modules/list/actions';
import TYPES from '../store/modules/list/action-types';
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
  yield takeEvery(TYPES.GET_SIMILAR_FILMS_ASYNC, getSimilarFilms);
}
