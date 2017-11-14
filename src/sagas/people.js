import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/getPeople';
import * as types from '../constants/People';
import * as Api from '../lib/api';

export function* getPeople(action) {
  yield put(actions.getPeopleRequest(action.query));
  try {
    const json = yield call(Api.requests.people, action.query);
    yield put(actions.getPeopleSuccess(json.results));
  } catch (e) {
    yield put(actions.getPeopleFailure(e.message));
  }
}

export default function* watchPeopleAsync() {
  yield takeEvery(types.GET_PEOPLE_ASYNC, getPeople);
}
