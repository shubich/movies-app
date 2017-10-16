import { 
    GET_FILMS_REQUEST,
    GET_FILMS_SUCCESS,
    GET_FILMS_FAILURE 
} from '../constants/Films';

const getFilms = (query) => {
    return (dispatch) => {
        dispatch({
            type: GET_FILMS_REQUEST,
            query         
        })
// https://api.themoviedb.org/3/search/movie?api_key=595f6d4c932627df7eb7d5c2f27a7e40&language=en-US&&query=taxi&page=1&include_adult=false

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=595f6d4c932627df7eb7d5c2f27a7e40&language=en-US&&query=${query}&page=1&include_adult=false`)  
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
                    type: GET_FILMS_SUCCESS,
                    films: data
                })  
                console.log(data);  
            });  
          }  
        )  
        .catch(function(err) {  
          console.log('Fetch Error :-S', err);  
        });
    }
};

export default getFilms;