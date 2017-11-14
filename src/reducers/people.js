import {
  GET_PEOPLE_REQUEST,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_FAILURE,
} from '../constants/People';

const initialState = {
  results: [],
  fetching: false,
  error: '',
};

const films = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE_REQUEST:
      return { ...initialState, fetching: true };
    case GET_PEOPLE_SUCCESS:
      return { ...initialState, results: action.results };
    case GET_PEOPLE_FAILURE:
      return { ...initialState, error: action.error };
    default:
      return state;
  }
};

export default films;
