import * as types from '../constants/MovieCredits';

const initialState = {
  results: [],
  fetching: false,
  error: '',
};

const movieCredits = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MOVIECREDITS_REQUEST:
      return { ...initialState, fetching: true };
    case types.GET_MOVIECREDITS_SUCCESS:
      return { ...initialState, results: action.results };
    case types.GET_MOVIECREDITS_FAILURE:
      return { ...initialState, error: action.error };
    default:
      return state;
  }
};

export default movieCredits;
