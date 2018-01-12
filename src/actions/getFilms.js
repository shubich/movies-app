import * as types from '../constants/Films';

export const getFilmsAsync = (query, page) => ({
  type: types.GET_FILMS_ASYNC,
  payload: { query, page },
});

export const getFilmsWithCastAsync = (id, page) => ({
  type: types.GET_FILMS_WITH_CAST_ASYNC,
  payload: { id, page },
});

export const getSimilarFilmsAsync = (id, page) => ({
  type: types.GET_SIMILAR_FILMS_ASYNC,
  payload: { id, page },
});

export const getFilmsRequest = () => ({
  type: types.GET_FILMS_REQUEST,
});

export const getFilmsSuccess = json => ({
  type: types.GET_FILMS_SUCCESS,
  payload: json,
});

export const getFilmsFailure = error => ({
  type: types.GET_FILMS_FAILURE,
  error,
});

export const resetFilms = () => ({
  type: types.RESET_FILMS,
});

