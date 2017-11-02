import { put, takeEvery, call } from 'redux-saga/effects';
import * as types from '../constants/Person';
import * as Api from '../api';

export const getPersonDetailsAsync = id => ({
  type: types.GET_PERSON_DETAILS_ASYNC,
  id,
});

const getPersonDetailsRequest = id => ({
  type: types.GET_PERSON_DETAILS_REQUEST,
  id,
});

const getPersonDetailsSuccess = details => ({
  type: types.GET_PERSON_DETAILS_SUCCESS,
  details,
});

const getPersonDetailsFailure = error => ({
  type: types.GET_PERSON_DETAILS_FAILURE,
  error,
});

function* getPersonDetails(action) {
  yield put(getPersonDetailsRequest());
  try {
    const details = yield call(Api.requests.person, action.id);
    yield put(getPersonDetailsSuccess(details));
  } catch (e) {
    yield put(getPersonDetailsFailure(e.message));
  }
}

export default function* watchPersonDetailsAsync() {
  yield takeEvery(types.GET_PERSON_DETAILS_ASYNC, getPersonDetails);
}
