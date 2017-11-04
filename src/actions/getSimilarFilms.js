import * as types from '../constants/Films';

export const getSimilarFilmsAsync = id => ({
  type: types.GET_SIMILAR_FILMS_ASYNC,
  id,
});

export const getSimilarFilmsRequest = id => ({
  type: types.GET_SIMILAR_FILMS_REQUEST,
  id,
});

export const getSimilarFilmsSuccess = results => ({
  type: types.GET_SIMILAR_FILMS_SUCCESS,
  results,
});

export const getSimilarFilmsFailure = error => ({
  type: types.GET_SIMILAR_FILMS_FAILURE,
  error,
});

