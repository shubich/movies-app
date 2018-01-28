import * as types from '../constants/List';

const initialState = {
  page: 0,
  total_pages: 0,
  total_results: 0,
  results: [],
  fetching: false,
  error: '',
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LIST_REQUEST:
      return { ...state, fetching: true };
    case types.GET_LIST_SUCCESS:
      return {
        ...state,
        ...action.payload,
        fetching: false,
        error: '',
        results: (action.payload.page === 1)
          ? [...action.payload.results]
          : [...state.results, ...action.payload.results],
      };
    case types.GET_LIST_FAILURE:
      return { ...state, error: action.error };
    case types.RESET_LIST:
      return { ...initialState };
    default:
      return state;
  }
};

export default list;
