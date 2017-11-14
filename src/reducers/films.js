import * as types from '../constants/Films';

const initialState = {
  results: [],
  fetching: false,
  error: '',
};

const films = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FILMS_REQUEST:
    case types.GET_FILMS_WITH_CAST_REQUEST:
    case types.GET_SIMILAR_FILMS_REQUEST:
      return { ...initialState, fetching: true };
    case types.GET_FILMS_SUCCESS:
    case types.GET_FILMS_WITH_CAST_SUCCESS:
    case types.GET_SIMILAR_FILMS_SUCCESS:
      return { ...initialState, results: action.results };
    case types.GET_FILMS_FAILURE:
    case types.GET_FILMS_WITH_CAST_FAILURE:
    case types.GET_SIMILAR_FILMS_FAILURE:
      return { ...initialState, error: action.error };
    default:
      return state;
  }
};

export default films;
