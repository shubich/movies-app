import * as types from '../constants/MovieCredits';

export const getMovieCreditsAsync = id => ({
  type: types.GET_MOVIECREDITS_ASYNC,
  id,
});

export const getMovieCreditsRequest = id => ({
  type: types.GET_MOVIECREDITS_REQUEST,
  id,
});

export const getMovieCreditsSuccess = results => ({
  type: types.GET_MOVIECREDITS_SUCCESS,
  results,
});

export const getMovieCreditsFailure = error => ({
  type: types.GET_MOVIECREDITS_FAILURE,
  error,
});
