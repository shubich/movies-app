import { GET_FILMS } from '../constants/Films';

const getFilms = (searchFilter, query) => ({
    type: GET_FILMS,
    searchFilter,
    query 
});

export default getFilms;