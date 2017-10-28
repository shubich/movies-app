import {
  GET_PEOPLE_REQUEST,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_FAILURE,
} from '../constants/People';

import * as Api from '../api';

const getPeopleRequest = query => ({
  type: GET_PEOPLE_REQUEST,
  query,
});

const getPeopleSuccess = results => ({
  type: GET_PEOPLE_SUCCESS,
  results,
});

const getPeopleFailure = error => ({
  type: GET_PEOPLE_FAILURE,
  error,
});

const getPeople = query => (
  (dispatch) => {
    dispatch(getPeopleRequest(query));
    return Api.requests.people(query)
      .then(res => res.json())
      .then(json => dispatch(getPeopleSuccess(json.results)))
      .catch(err => dispatch(getPeopleFailure(err)));
  }
);

export default getPeople;
