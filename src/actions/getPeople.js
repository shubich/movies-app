import { 
    GET_PEOPLE_REQUEST,
    GET_PEOPLE_SUCCESS,
    GET_PEOPLE_FAILURE 
} from '../constants/People';

import * as Api from '../api';

const getFilms = (query) => {
    return (dispatch) => {
        dispatch({
            type: GET_PEOPLE_REQUEST,
            query         
        })
        
        Api.requests.people(query)
        .then(  
            function(response) {       
                if (response.status !== 200) {  
                    console.log('Looks like there was a problem. Status Code: ' + response.status);  
                    return;  
                }

                // Examine the text in the response  
                response.json().then(function(data) {
                    dispatch({
                        type: GET_PEOPLE_SUCCESS,
                        results: data.results
                    })
                });  
            }  
        )  
        .catch(function(err) {
            dispatch({
                type: GET_PEOPLE_FAILURE,
                error: err
            })
            console.log('Fetch Error :-S', err);  
        });
    }
};

export default getFilms;