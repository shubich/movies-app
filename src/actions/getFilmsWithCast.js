import * as types from '../constants/Films';

export const getFilmsWithCastAsync = id => ({
  type: types.GET_FILMS_WITH_CAST_ASYNC,
  id,
});

export const getFilmsWithCastRequest = id => ({
  type: types.GET_FILMS_WITH_CAST_REQUEST,
  id,
});

export const getFilmsWithCastSuccess = results => ({
  type: types.GET_FILMS_WITH_CAST_SUCCESS,
  results,
});

export const getFilmsWithCastFailure = error => ({
  type: types.GET_FILMS_WITH_CAST_FAILURE,
  error,
});

