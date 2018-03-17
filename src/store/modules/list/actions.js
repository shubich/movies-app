import TYPES from './action-types';

export default {
  getPeopleAsync: (query, page) => ({
    type: TYPES.GET_PEOPLE_ASYNC,
    payload: { query, page },
  }),

  getFilmsAsync: (query, page) => ({
    type: TYPES.GET_FILMS_ASYNC,
    payload: { query, page },
  }),

  getFilmsWithCastAsync: (id, page) => ({
    type: TYPES.GET_FILMS_WITH_CAST_ASYNC,
    payload: { id, page },
  }),

  getSimilarFilmsAsync: (id, page) => ({
    type: TYPES.GET_SIMILAR_FILMS_ASYNC,
    payload: { id, page },
  }),

  getListRequest: () => ({
    type: TYPES.GET_LIST_REQUEST,
  }),

  getListSuccess: json => ({
    type: TYPES.GET_LIST_SUCCESS,
    payload: json,
  }),

  getListFailure: error => ({
    type: TYPES.GET_LIST_FAILURE,
    error,
  }),

  resetList: () => ({
    type: TYPES.RESET_LIST,
  }),
};
