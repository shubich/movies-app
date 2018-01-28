import * as types from '../constants/List';

export const getPeopleAsync = (query, page) => ({
  type: types.GET_PEOPLE_ASYNC,
  payload: { query, page },
});

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

export const getListRequest = () => ({
  type: types.GET_LIST_REQUEST,
});

export const getListSuccess = json => ({
  type: types.GET_LIST_SUCCESS,
  payload: json,
});

export const getListFailure = error => ({
  type: types.GET_LIST_FAILURE,
  error,
});

export const resetList = () => ({
  type: types.RESET_LIST,
});
