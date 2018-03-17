import { createReducer } from '../../utils';
import ACTIONS from './action-types';

const initialState = {
  details: {},
  fetching: false,
  error: '',
};

const details = createReducer(initialState, {
  [ACTIONS.GET_DETAILS_REQUEST]: state => ({
    ...state, fetching: true, error: '',
  }),

  [ACTIONS.GET_DETAILS_SUCCESS]: (state, action) => ({
    details: { ...action.details }, fetching: false, error: '',
  }),

  [ACTIONS.GET_DETAILS_FAILURE]: (state, action) => ({
    details: {}, fetching: false, error: action.error,
  }),

  [ACTIONS.RESET_DETAILS]: () => ({
    ...initialState,
  }),
});

export default details;
