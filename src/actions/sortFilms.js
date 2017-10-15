import { SORT_FILMS } from '../constants/Films';

const sortFilms = (resultsFilter) => ({
    type: SORT_FILMS,
    resultsFilter 
});

export default sortFilms;