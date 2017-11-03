import {
  GET_PERSON_DETAILS_REQUEST,
  GET_PERSON_DETAILS_SUCCESS,
  GET_PERSON_DETAILS_FAILURE,
} from '../constants/Person';

import { handlePersonDetails } from '../lib/utils';

const initialState = {
  details: {},
  fetching: false,
  error: '',
};

const personDetails = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSON_DETAILS_REQUEST:
      return { details: {}, fetching: true, error: '' };
    case GET_PERSON_DETAILS_SUCCESS:
      return { details: handlePersonDetails(action.details), fetching: false, error: '' };
    case GET_PERSON_DETAILS_FAILURE:
      return { details: {}, fetching: false, error: action.error };
    default:
      return state;
  }
};

export default personDetails;
