import {
  GET_FILM_DETAILS_REQUEST,
  GET_FILM_DETAILS_SUCCESS,
  GET_FILM_DETAILS_FAILURE,
} from '../constants/Film';

import { handleFilmDetails } from '../utils';

const initialState = {
  details: {},
  fetching: false,
  error: '',
};

const filmDetails = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILM_DETAILS_REQUEST:
      return { details: {}, fetching: true, error: '' };
    case GET_FILM_DETAILS_SUCCESS:
      return { details: handleFilmDetails({ ...action.details }), fetching: false, error: '' };
    case GET_FILM_DETAILS_FAILURE:
      return { details: {}, fetching: false, error: action.error };
    default:
      return state;
  }
};

export default filmDetails;
