import { put, takeEvery, call } from 'redux-saga/effects';
import * as actions from '../actions/getPersonDetails';
import * as types from '../constants/Person';
import * as Api from '../lib/api';

export function* getPersonDetails(action) {
  yield put(actions.getPersonDetailsRequest());
  try {
    const details = yield call(Api.requests.person, action.id);
    yield put(actions.getPersonDetailsSuccess(details));
  } catch (e) {
    yield put(actions.getPersonDetailsFailure(e.message));
  }
}

export default function* watchPersonDetailsAsync() {
  yield takeEvery(types.GET_PERSON_DETAILS_ASYNC, getPersonDetails);
}

