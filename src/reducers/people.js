import * as types from '../constants/People';

const initialState = {
  page: 0,
  total_pages: 0,
  total_results: 0,
  results: [],
  fetching: false,
  error: '',
};

const people = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PEOPLE_REQUEST:
      return { ...state, fetching: true };
    case types.GET_PEOPLE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        fetching: false,
        error: '',
        results: (action.payload.page === 1)
          ? [...action.payload.results]
          : [...state.results, ...action.payload.results],
      };
    case types.GET_PEOPLE_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default people;
