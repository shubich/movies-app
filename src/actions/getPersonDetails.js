import {
  GET_PERSON_DETAILS_REQUEST,
  GET_PERSON_DETAILS_SUCCESS,
  GET_PERSON_DETAILS_FAILURE,
} from '../constants/Person';

import * as Api from '../api';

const getPersonDetailsRequest = id => ({
  type: GET_PERSON_DETAILS_REQUEST,
  id,
});

const getPersonDetailsSuccess = details => ({
  type: GET_PERSON_DETAILS_SUCCESS,
  details,
});

const getPersonDetailsFailure = error => ({
  type: GET_PERSON_DETAILS_FAILURE,
  error,
});

const getPersonDetails = id => (
  (dispatch) => {
    dispatch(getPersonDetailsRequest(id));
    return Api.requests.person(id)
      .then(res => res.json())
      .then(json => dispatch(getPersonDetailsSuccess(json)))
      .catch(err => dispatch(getPersonDetailsFailure(err)));
  }
);

export default getPersonDetails;
