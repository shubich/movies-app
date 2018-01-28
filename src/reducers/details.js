import * as types from '../constants/Details';

const initialState = {
  details: {},
  fetching: false,
  error: '',
};

const filmDetails = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DETAILS_REQUEST:
      return { ...state, fetching: true, error: '' };
    case types.GET_DETAILS_SUCCESS:
      return { details: { ...action.details }, fetching: false, error: '' };
    case types.GET_DETAILS_FAILURE:
      return { details: {}, fetching: false, error: action.error };
    case types.RESET_DETAILS:
      return { ...initialState };
    default:
      return state;
  }
};

export default filmDetails;
