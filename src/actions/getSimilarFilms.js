import { 
    GET_SIMILAR_FILMS_REQUEST,
    GET_SIMILAR_FILMS_SUCCESS,
    GET_SIMILAR_FILMS_FAILURE 
} from '../constants/Films';

import * as Api from '../api';

const getSimilarFilms = (id) => {
    return (dispatch) => {
        dispatch({
            type: GET_SIMILAR_FILMS_REQUEST,
            id         
        })
        
        return Api.requests.similar(id)
        .then(  
            function(response) {  
                if (response.status !== 200) {  
                    console.log('Looks like there was a problem. Status Code: ' + response.status);  
                    return;  
                }

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