import { 
    GET_FILM_DETAILS_REQUEST,
    GET_FILM_DETAILS_SUCCESS,
    GET_FILM_DETAILS_FAILURE 
} from '../constants/Films';

import * as API from '../api';
import getFilms from './getFilms';

const getFilmDetails = (id) => {
    return (dispatch) => {
        dispatch({
            type: GET_FILM_DETAILS_REQUEST,
            id         
        })
        
        const queryString = API.encodeQueryData({...API.getFilmDetailsQuery});
        let url = `${API.host}${API.moviePath}${id}?${queryString}`;

        fetch(url)  
        .then(  
          function(response) {  
            if (response.status !== 200) {  
              console.log('Looks like there was a problem. Status Code: ' +  
                response.status);  
              return;  
            }
      
            // Examine the text in the response  
            response.json().then(function(data) {
                dispatch({
                    type: GET_FILM_DETAILS_SUCCESS,
                    details: data
                })
                dispatch(
                    getFilms(data.title)                    
                )
            });  
          }  
        )  
        .catch(function(err) {
            dispatch({
                type: GET_FILM_DETAILS_FAILURE,
                error: err
            })
            console.log('Fetch Error :-S', err);  
        });
    }
};

export default getFilmDetails;