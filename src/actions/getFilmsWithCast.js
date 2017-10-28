import {
  GET_FILMS_REQUEST,
  GET_FILMS_SUCCESS,
  GET_FILMS_FAILURE,
} from '../constants/Films';

import * as Api from '../api';

const getFilmsWithCastRequest = id => ({
  type: GET_FILMS_REQUEST,
  id,
});

const getFilmsWithCastSuccess = results => ({
  type: GET_FILMS_SUCCESS,
  results,
});

const getFilmsWithCastFailure = error => ({
  type: GET_FILMS_FAILURE,
  error,
});

const getFilmsWithCast = id => (
  (dispatch) => {
    dispatch(getFilmsWithCastRequest(id));
    return Api.requests.filmsWithCast(id)
      .then(res => res.json())
      .then(json => dispatch(getFilmsWithCastSuccess(json.results)))
      .catch(err => dispatch(getFilmsWithCastFailure(err)));
  }
);

export default getFilmsWithCast;
