import * as types from '../constants/Details';

export const getPersonDetailsAsync = id => ({
  type: types.GET_PERSON_DETAILS_ASYNC,
  id,
});

export const getFilmDetailsAsync = id => ({
  type: types.GET_FILM_DETAILS_ASYNC,
  id,
});

export const getDetailsRequest = id => ({
  type: types.GET_DETAILS_REQUEST,
  id,
});

export const getDetailsSuccess = details => ({
  type: types.GET_DETAILS_SUCCESS,
  details,
});

export const getDetailsFailure = error => ({
  type: types.GET_DETAILS_FAILURE,
  error,
});

export const resetDetails = () => ({
  type: types.RESET_DETAILS,
});
