import { put, takeEvery, call } from 'redux-saga/effects';
import * as types from '../constants/People';
import * as Api from '../api';

export const getPeopleAsync = query => ({
  type: types.GET_PEOPLE_ASYNC,
  query,
});

const getPeopleRequest = query => ({
  type: types.GET_PEOPLE_REQUEST,
  query,
});

const getPeopleSuccess = results => ({
  type: types.GET_PEOPLE_SUCCESS,
  results,
});

const getPeopleFailure = error => ({
  type: types.GET_PEOPLE_FAILURE,
  error,
});

function* getPeople(action) {
  yield put(getPeopleRequest());
  try {
    const json = yield call(Api.requests.people, action.query);
    yield put(getPeopleSuccess(json.results));
  } catch (e) {
    yield put(getPeopleFailure(e.message));
  }
}

export default function* watchPeopleAsync() {
  yield takeEvery(types.GET_PEOPLE_ASYNC, getPeople);
}
