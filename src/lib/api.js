import { jsonToQueryString } from './utils';

const key = '595f6d4c932627df7eb7d5c2f27a7e40';
const host = 'https://api.themoviedb.org/';
export const imagePrefix = 'https://image.tmdb.org/t/p/w640';

const paths = {
  search: '3/search/movie',
  movie: '3/movie/',
  people: '3/search/person',
  person: '3/person/',
  discover: '3/discover/movie',
  movieCredits: personId => `3/person/${personId}/movie_credits`,
};

const queries = {
  films: {
    api_key: key,
    language: 'en-US',
    include_adult: 'false',
    page: '1',
  },
  default: {
    api_key: key,
  },
};

const fetchJson = url => fetch(url).then(res => res.json());

export const requests = {
  movieCredits: (personId) => {
    const queryString = jsonToQueryString({ ...queries.default });
    const url = `${host}${paths.movieCredits(personId)}${queryString}`;
    return fetchJson(url);
  },
  films: ({ query, page }) => {
    const queryString = jsonToQueryString({ ...queries.films, query, page });
    const url = `${host}${paths.search}${queryString}`;
    return fetchJson(url);
  },
  details: (id) => {
    const queryString = jsonToQueryString({ ...queries.default });
    const url = `${host}${paths.movie}${id}${queryString}`;
    return fetchJson(url);
  },
  similar: ({ id, page }) => {
    const queryString = jsonToQueryString({ ...queries.default, page });
    const url = `${host}${paths.movie}${id}/similar${queryString}`;
    return fetchJson(url);
  },
  people: ({ query, page }) => {
    const queryString = jsonToQueryString({ ...queries.default, query, page });
    const url = `${host}${paths.people}${queryString}`;
    return fetchJson(url);
  },
  person: (id) => {
    const queryString = jsonToQueryString({ ...queries.default });
    const url = `${host}${paths.person}${id}${queryString}`;
    return fetchJson(url);
  },
  filmsWithCast: ({ id, page }) => {
    const queryString = jsonToQueryString({ ...queries.default, with_cast: id, page });
    const url = `${host}${paths.discover}${queryString}`;
    return fetchJson(url);
  },
};
