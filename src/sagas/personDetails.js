import { put, takeEvery, call } from 'redux-saga/effects';
import actions from '../store/modules/details/actions';
import TYPES from '../store/modules/details/action-types';
import * as resources from '../api/resources';

export function* getPersonDetails(action) {
  yield put(actions.getDetailsRequest());
  try {
    const details = yield call(resources.person, action.id);
    yield put(actions.getDetailsSuccess(details));
  } catch (e) {
    yield put(actions.getDetailsFailure(e.message));
  }
}

export default function* watchPersonDetailsAsync() {
  yield takeEvery(TYPES.GET_PERSON_DETAILS_ASYNC, getPersonDetails);
}

