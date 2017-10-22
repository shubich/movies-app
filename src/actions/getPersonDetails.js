import { 
    GET_PERSON_DETAILS_REQUEST,
    GET_PERSON_DETAILS_SUCCESS,
    GET_PERSON_DETAILS_FAILURE
} from '../constants/Person';

import * as Api from '../api';

const getPersonDetails = (id) => {
    return (dispatch) => {
        dispatch({
            type: GET_PERSON_DETAILS_REQUEST,
            id         
        })
        
        Api.requests.person(id)
        .then(  
            function(response) {  
                if (response.status !== 200) {  
                    console.log('Looks like there was a problem. Status Code: ' + response.status);  
                    return;  
                }
        
                // Examine the text in the response  
                response.json().then(function(data) {
                    dispatch({
                        type: GET_PERSON_DETAILS_SUCCESS,
                        details: data
                    })
                });  
            }  
        )  
        .catch(function(err) {
            dispatch({
                type: GET_PERSON_DETAILS_FAILURE,
                error: err
            })
            console.log('Fetch Error :-S', err);  
        });
    }
};

export default getPersonDetails;