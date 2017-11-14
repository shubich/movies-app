import { put, takeEvery, call } from 'redux-saga/effects';
import * as actions from '../actions/getFilmDetails';
import * as types from '../constants/Film';
import * as Api from '../lib/api';

export function* getFilmDetails(action) {
  yield put(actions.getFilmDetailsRequest());
  try {
    const details = yield call(Api.requests.details, action.id);
    yield put(actions.getFilmDetailsSuccess(details));
  } catch (e) {
    yield put(actions.getFilmDetailsFailure(e.message));
  }
}

export default function* watchFilmDetailsAsync() {
  yield takeEvery(types.GET_FILM_DETAILS_ASYNC, getFilmDetails);
}
