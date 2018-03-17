import { put, call, takeEvery } from 'redux-saga/effects';
import actions from '../store/modules/list/actions';
import TYPES from '../store/modules/list/action-types';
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
  yield takeEvery(TYPES.GET_PEOPLE_ASYNC, getPeople);
}
