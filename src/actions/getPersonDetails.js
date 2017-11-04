import * as types from '../constants/Person';

export const getPersonDetailsAsync = id => ({
  type: types.GET_PERSON_DETAILS_ASYNC,
  id,
});

export const getPersonDetailsRequest = id => ({
  type: types.GET_PERSON_DETAILS_REQUEST,
  id,
});

export const getPersonDetailsSuccess = details => ({
  type: types.GET_PERSON_DETAILS_SUCCESS,
  details,
});

export const getPersonDetailsFailure = error => ({
  type: types.GET_PERSON_DETAILS_FAILURE,
  error,
});
