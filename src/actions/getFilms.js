import * as types from '../constants/Films';

export const getFilmsAsync = query => ({
  type: types.GET_FILMS_ASYNC,
  query,
});

export const getFilmsRequest = query => ({
  type: types.GET_FILMS_REQUEST,
  query,
});

export const getFilmsSuccess = results => ({
  type: types.GET_FILMS_SUCCESS,
  results,
});

export const getFilmsFailure = error => ({
  type: types.GET_FILMS_FAILURE,
  error,
});
