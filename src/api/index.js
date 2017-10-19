const Api = {
    key: '595f6d4c932627df7eb7d5c2f27a7e40',
    host: 'https://api.themoviedb.org/',
    imagePrefix: 'https://image.tmdb.org/t/p/w640'
};

// https://www.npmjs.com/package/eslint-config-airbnb !!!

export const API_KEY = '595f6d4c932627df7eb7d5c2f27a7e40';
export const host = 'https://api.themoviedb.org/';
export const imagePrefix = 'https://image.tmdb.org/t/p/w640';

export const searchMoviesPath = '3/search/movie';
export const moviePath = '3/movie/';

export const encodeQueryData = (data) => {
    let query = [];
    for (let item in data) {
        query.push(`${encodeURIComponent(item)}=${encodeURIComponent(data[item])}`);
    }
    return query.join('&');
}

export const getFilmsQuery = {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: 'false',
    page: '1'
};

export const getFilmDetailsQuery = {
    api_key: API_KEY
}

export const filmsRequest = (query) => {
    const queryString = API.encodeQueryData({...API.getFilmsQuery, query});
    let url = `${API.host}${API.searchMoviesPath}?${queryString}`;

    return request(url);
}

export const similarFilmsRequest = (id) => {
    const queryString = encodeQueryData({...getFilmDetailsQuery});
    let url = `${host}${moviePath}${id}/similar?${queryString}`;

    return request(url);
}

export const filmDetailsRequest = (id) => {
    const queryString = API.encodeQueryData({...API.getFilmDetailsQuery});
    let url = `${API.host}${API.moviePath}${id}?${queryString}`;

    return request(url);
}

export const request = (url) => (
    fetch(url)
    .then(  
        function(response) {  
            if (response.status !== 200) {  
                console.log('Looks like there was a problem. Status Code: ' +  
                response.status);  
                return;  
            }  
        }  
    )
)

// request films url exapmle
// https://api.themoviedb.org/3/search/movie?api_key=595f6d4c932627df7eb7d5c2f27a7e40&language=en-US&&query=taxi&page=1&include_adult=false

// request similar films url exapmle
// https://api.themoviedb.org/3/movie/2330/similar?api_key=595f6d4c932627df7eb7d5c2f27a7e40

// request film details url exapmle
// https://api.themoviedb.org/3/movie/343611?api_key={api_key}