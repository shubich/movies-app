import { put, takeEvery, call } from 'redux-saga/effects';
import * as types from '../constants/Film';
import * as Api from '../api';

export const getFilmDetailsAsync = id => ({
  type: types.GET_FILM_DETAILS_ASYNC,
  id,
});

const getFilmDetailsRequest = id => ({
  type: types.GET_FILM_DETAILS_REQUEST,
  id,
});

const getFilmDetailsSuccess = details => ({
  type: types.GET_FILM_DETAILS_SUCCESS,
  details,
});

const getFilmDetailsFailure = error => ({
  type: types.GET_FILM_DETAILS_FAILURE,
  error,
});

function* getFilmDetails(action) {
  yield put(getFilmDetailsRequest());
  try {
    const details = yield call(Api.requests.details, action.id);
    yield put(getFilmDetailsSuccess(details));
  } catch (e) {
    yield put(getFilmDetailsFailure(e.message));
  }
}

export default function* watchFilmDetailsAsync() {
  yield takeEvery(types.GET_FILM_DETAILS_ASYNC, getFilmDetails);
}
