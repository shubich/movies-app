import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/listActions';
import * as types from '../constants/List';
import * as resources from '../api/resources';

export function* getPeople(action) {
  yield put(actions.getListRequest());
  try {
    const json = yield call(resources.searchPerson, action.payload);
    yield put(actions.getListSuccess(json));
  } catch (e) {
    yield put(actions.getListFailure(e.message));
  }
}

export default function* watchPeopleAsync() {
  yield takeEvery(types.GET_PEOPLE_ASYNC, getPeople);
}
