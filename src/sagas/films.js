import { put, takeEvery, call } from 'redux-saga/effects';
import * as actions from '../actions/getFilms';
import * as types from '../constants/Films';
import * as Api from '../lib/api';

export function* getFilms(action) {
  yield put(actions.getFilmsRequest());
  try {
    const json = yield call(Api.requests.films, action.payload);
    yield put(actions.getFilmsSuccess(json));
  } catch (e) {
    yield put(actions.getFilmsFailure(e.message));
  }
}

export default function* watchFilmsAsync() {
  yield takeEvery(types.GET_FILMS_ASYNC, getFilms);
}
