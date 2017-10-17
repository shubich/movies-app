export const API_KEY = '595f6d4c932627df7eb7d5c2f27a7e40';
export const host = 'https://api.themoviedb.org/3/search/movie';
export const imagePrefix = 'https://image.tmdb.org/t/p/w640';

export const encodeQueryData = (data) => {
    let query = [];
    for (let item in data) {
        query.push(`${encodeURIComponent(item)}=${encodeURIComponent(data[item])}`);
    }
    return query.join('&');
}

export const QUERY = {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: 'false',
    page: '1'
};

// request url exapmle
// https://api.themoviedb.org/3/search/movie?api_key=595f6d4c932627df7eb7d5c2f27a7e40&language=en-US&&query=taxi&page=1&include_adult=false
