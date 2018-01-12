import * as types from '../constants/Films';

const initialState = {
  page: 0,
  total_pages: 0,
  total_results: 0,
  results: [],
  fetching: false,
  error: '',
};

const films = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FILMS_REQUEST:
      return { ...state, fetching: true };
    case types.GET_FILMS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        fetching: false,
        error: '',
        results: (action.payload.page === 1)
          ? [...action.payload.results]
          : [...state.results, ...action.payload.results],
      };
    case types.GET_FILMS_FAILURE:
      return { ...state, error: action.error };
    case types.RESET_FILMS:
      return { ...state, results: [] };
    default:
      return state;
  }
};

export default films;
