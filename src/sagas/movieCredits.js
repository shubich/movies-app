import { put, takeEvery, call } from 'redux-saga/effects';
import * as actions from '../actions/getMovieCredits';
import * as types from '../constants/MovieCredits';
import * as Api from '../lib/api';

export function* getMovieCredits(action) {
  yield put(actions.getMovieCreditsRequest());
  try {
    const json = yield call(Api.requests.movieCredits, action.id);
    yield put(actions.getMovieCreditsSuccess(json.cast));
  } catch (e) {
    yield put(actions.getMovieCreditsFailure(e.message));
  }
}

export default function* watchMovieCreditsAsync() {
  yield takeEvery(types.GET_MOVIECREDITS_ASYNC, getMovieCredits);
}
