import TYPES from './action-types';

export default {
  getPersonDetailsAsync: id => ({
    type: TYPES.GET_PERSON_DETAILS_ASYNC,
    id,
  }),

  getFilmDetailsAsync: id => ({
    type: TYPES.GET_FILM_DETAILS_ASYNC,
    id,
  }),

  getDetailsRequest: id => ({
    type: TYPES.GET_DETAILS_REQUEST,
    id,
  }),

  getDetailsSuccess: details => ({
    type: TYPES.GET_DETAILS_SUCCESS,
    details,
  }),

  getDetailsFailure: error => ({
    type: TYPES.GET_DETAILS_FAILURE,
    error,
  }),

  resetDetails: () => ({
    type: TYPES.RESET_DETAILS,
  }),
};
