import { encodeQueryData } from '../utils';

const key = '595f6d4c932627df7eb7d5c2f27a7e40';
const host = 'https://api.themoviedb.org/';
export const imagePrefix = 'https://image.tmdb.org/t/p/w640';

const paths = {
  search: '3/search/movie',
  movie: '3/movie/',
  people: '3/search/person',
  person: '3/person/',
  discover: '3/discover/movie',
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

export const requests = {
  films: (query) => {
    const queryString = encodeQueryData({ ...queries.films, query });
    const url = `${host}${paths.search}?${queryString}`;
    return fetch(url);
  },
  details: (id) => {
    const queryString = encodeQueryData({ ...queries.default });
    const url = `${host}${paths.movie}${id}?${queryString}`;
    return fetch(url);
  },
  similar: (id) => {
    const queryString = encodeQueryData({ ...queries.default });
    const url = `${host}${paths.movie}${id}/similar?${queryString}`;
    return fetch(url);
  },
  people: (query) => {
    const queryString = encodeQueryData({ ...queries.default, query });
    const url = `${host}${paths.people}?${queryString}`;
    return fetch(url);
  },
  person: (id) => {
    const queryString = encodeQueryData({ ...queries.default });
    const url = `${host}${paths.person}${id}?${queryString}`;
    return fetch(url);
  },
  filmsWithCast: (withCast) => {
    const queryString = encodeQueryData({ ...queries.default, withCast });
    const url = `${host}${paths.discover}?${queryString}`;
    return fetch(url);
  },
};

// https://www.npmjs.com/package/eslint-config-airbnb !!!

// request films url exapmle
// https://api.themoviedb.org/3/search/movie?api_key=595f6d4c932627df7eb7d5c2f27a7e40&language=en-US&&query=taxi&page=1&include_adult=false

// request similar films url exapmle
// https://api.themoviedb.org/3/movie/2330/similar?api_key=595f6d4c932627df7eb7d5c2f27a7e40

// request film details url exapmle
// https://api.themoviedb.org/3/movie/343611?api_key={api_key}

// request person url exapmle
// https://api.themoviedb.org/3/person/976?api_key=595f6d4c932627df7eb7d5c2f27a7e40

// request film with person url exapmle
// https://api.themoviedb.org/3/discover/movie?api_key=595f6d4c932627df7eb7d5c2f27a7e40&with_cast=976
