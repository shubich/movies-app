import * as types from '../constants/People';

export const getPeopleAsync = query => ({
  type: types.GET_PEOPLE_ASYNC,
  query,
});

export const getPeopleRequest = query => ({
  type: types.GET_PEOPLE_REQUEST,
  query,
});

export const getPeopleSuccess = results => ({
  type: types.GET_PEOPLE_SUCCESS,
  results,
});

export const getPeopleFailure = error => ({
  type: types.GET_PEOPLE_FAILURE,
  error,
});
