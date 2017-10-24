import { 
    GET_FILM_DETAILS_REQUEST,
    GET_FILM_DETAILS_SUCCESS,
    GET_FILM_DETAILS_FAILURE 
} from '../constants/Film';

import * as Api from '../api';

const getFilmDetailsRequest = (id) => ({
    type: GET_FILM_DETAILS_REQUEST,
    id
});

const getFilmDetailsSuccess = (details) => ({
    type: GET_FILM_DETAILS_SUCCESS,
    details     
});

const getFilmDetailsFailure = (error) => ({
    type: GET_FILM_DETAILS_FAILURE,
    error     
});

const getFilmDetails = (id) => (
    (dispatch) => {
        dispatch(getFilmDetailsRequest(id))
        return Api.requests.details(id)
            .then(res => res.json()) 
            .then(json => dispatch(getFilmDetailsSuccess(json)))
            .catch(err => dispatch(getFilmDetailsFailure(err)))
    }
);

export default getFilmDetails;