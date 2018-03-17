import { createReducer } from '../../utils';
import ACTIONS from './action-types';

const initialState = {
  page: 0,
  total_pages: 0,
  total_results: 0,
  results: [],
  fetching: false,
  error: '',
};

const list = createReducer(initialState, {
  [ACTIONS.GET_LIST_REQUEST]: state => ({
    ...state, fetching: true,
  }),

  [ACTIONS.GET_LIST_SUCCESS]: (state, action) => ({
    ...state,
    ...action.payload,
    fetching: false,
    error: '',
    results: (action.payload.page === 1)
      ? [...action.payload.results]
      : [...state.results, ...action.payload.results],
  }),

  [ACTIONS.GET_LIST_FAILURE]: (state, action) => ({
    ...state, error: action.error,
  }),

  [ACTIONS.RESET_LIST]: () => ({
    ...initialState,
  }),
});

export default list;
