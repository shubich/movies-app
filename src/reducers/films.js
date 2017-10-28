import {
  GET_FILMS_REQUEST,
  GET_FILMS_SUCCESS,
  GET_FILMS_FAILURE,
  GET_SIMILAR_FILMS_REQUEST,
  GET_SIMILAR_FILMS_SUCCESS,
  GET_SIMILAR_FILMS_FAILURE,
} from '../constants/Films';

const initialState = {
  results: [],
  fetching: false,
  error: '',
};

const films = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS_REQUEST:
    case GET_SIMILAR_FILMS_REQUEST:
      return { ...initialState, fetching: true };
    case GET_FILMS_SUCCESS:
    case GET_SIMILAR_FILMS_SUCCESS:
      return { ...initialState, results: action.results };
    case GET_FILMS_FAILURE:
    case GET_SIMILAR_FILMS_FAILURE:
      return { ...initialState, error: action.error };
    default:
      return state;
  }
};

export default films;
