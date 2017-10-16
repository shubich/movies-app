const API_KEY = '595f6d4c932627df7eb7d5c2f27a7e40';
const host = 'https://api.themoviedb.org';
const route = '/3/search/movie';

// https://api.themoviedb.org/3/search/movie?api_key=595f6d4c932627df7eb7d5c2f27a7e40&language=en-US&&query=taxi&page=1&include_adult=false
const encodeQueryData = (data) => {
    let query = [];
    for (let item in data) {
        query.push(`${encodeURIComponent(item)}=${encodeURIComponent(data[item])}`);
    }
    return query.join('&');
}

const QUERY = {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: 'false'
};

var data = { 'first name': 'George', 'last name': 'Jetson', 'age': 110 };
var querystring = encodeQueryData(data);

console.log(querystring);

export default {
    getFilms(params) {
        switch (params.searchFilter) {
            case 'title':
                //let films = 
                return '...';
            case 'director':
                return '...';
        }
    },
    getFilmDetails(params) {
        // getFilmById
    }
}