import * as types from '../constants/Film';

export const getFilmDetailsAsync = id => ({
  type: types.GET_FILM_DETAILS_ASYNC,
  id,
});

export const getFilmDetailsRequest = id => ({
  type: types.GET_FILM_DETAILS_REQUEST,
  id,
});

export const getFilmDetailsSuccess = details => ({
  type: types.GET_FILM_DETAILS_SUCCESS,
  details,
});

export const getFilmDetailsFailure = error => ({
  type: types.GET_FILM_DETAILS_FAILURE,
  error,
});
