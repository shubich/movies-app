import { 
    GET_SIMILAR_FILMS_REQUEST,
    GET_SIMILAR_FILMS_SUCCESS,
    GET_SIMILAR_FILMS_FAILURE 
} from '../constants/Films';

import * as API from '../api';

const getSimilarFilms = (id) => {
    return (dispatch) => {
        dispatch({
            type: GET_SIMILAR_FILMS_REQUEST,
            id         
        })
        
        API.similarFilmsRequest(id)
        .then(  
            function(response) {  
                // Examine the text in the response  
                response.json().then(function(data) {
                    dispatch({
                        type: GET_SIMILAR_FILMS_SUCCESS,
                        results: data.results
                    })
                });  
            }  
        )  
        .catch(function(err) {
            dispatch({
                type: GET_SIMILAR_FILMS_FAILURE,
                error: err
            })
            console.log('Fetch Error :-S', err);  
        });
    }
};

export default getSimilarFilms;