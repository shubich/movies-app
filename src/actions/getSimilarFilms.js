import {
  GET_SIMILAR_FILMS_REQUEST,
  GET_SIMILAR_FILMS_SUCCESS,
  GET_SIMILAR_FILMS_FAILURE,
} from '../constants/Films';

import * as Api from '../api';

const getSimilarFilmsRequest = id => ({
  type: GET_SIMILAR_FILMS_REQUEST,
  id,
});

const getSimilarFilmsSuccess = results => ({
  type: GET_SIMILAR_FILMS_SUCCESS,
  results,
});

const getSimilarFilmsFailure = error => ({
  type: GET_SIMILAR_FILMS_FAILURE,
  error,
});

const getSimilarFilms = id => (
  (dispatch) => {
    dispatch(getSimilarFilmsRequest(id));
    return Api.requests.similar(id)
      .then(res => res.json())
      .then(json => dispatch(getSimilarFilmsSuccess(json.results)))
      .catch(err => dispatch(getSimilarFilmsFailure(err)));
  }
);

export default getSimilarFilms;
