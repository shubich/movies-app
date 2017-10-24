import { 
    GET_FILMS_REQUEST,
    GET_FILMS_SUCCESS,
    GET_FILMS_FAILURE 
} from '../constants/Films';

import * as Api from '../api';

const getFilmsRequest = (query) => ({
    type: GET_FILMS_REQUEST,
    query
});

const getFilmsSuccess = (results) => ({
    type: GET_FILMS_SUCCESS,
    results     
});

const getFilmsFailure = (error) => ({
    type: GET_FILMS_FAILURE,
    error     
});

const getFilms = (query) => (
    (dispatch) => {
        dispatch(getFilmsRequest(query))
        return Api.requests.films(query)
            .then(res => res.json())
            .then(json => dispatch(getFilmsSuccess(json.results)))    
            .catch(err => dispatch(getFilmsFailure(err)))
    }
);

export default getFilms;