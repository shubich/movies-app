import { put, takeEvery, call } from 'redux-saga/effects';
import * as actions from '../actions/listActions';
import * as types from '../constants/List';
import * as resources from '../api/resources';

export function* getFilms(action) {
  yield put(actions.getListRequest());
  try {
    const json = yield call(resources.searchMovie, action.payload);
    yield put(actions.getListSuccess(json));
  } catch (e) {
    yield put(actions.getListFailure(e.message));
  }
}

export default function* watchFilmsAsync() {
  yield takeEvery(types.GET_FILMS_ASYNC, getFilms);
}
