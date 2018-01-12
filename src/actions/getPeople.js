import * as types from '../constants/People';

export const getPeopleAsync = (query, page) => ({
  type: types.GET_PEOPLE_ASYNC,
  payload: { query, page },
});

export const getPeopleRequest = () => ({
  type: types.GET_PEOPLE_REQUEST,
});

export const getPeopleSuccess = json => ({
  type: types.GET_PEOPLE_SUCCESS,
  payload: json,
});

export const getPeopleFailure = error => ({
  type: types.GET_PEOPLE_FAILURE,
  error,
});
