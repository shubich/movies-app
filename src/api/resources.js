import Api from './';

export function searchMovie(json) {
  const api = new Api('3/search/movie', json);
  return api.fetchJson();
}

export function searchPerson(json) {
  const api = new Api('3/search/person', json);
  return api.fetchJson();
}

export function movie(id) {
  const api = new Api(`3/movie/${id}`);
  return api.fetchJson();
}

export function person(id) {
  const api = new Api(`3/person/${id}`);
  return api.fetchJson();
}

export function movieSimilar({ id, page }) {
  const api = new Api(`3/movie/${id}/similar`, { page });
  return api.fetchJson();
}

export function discoverMovie({ id, page }) {
  const api = new Api('3/discover/movie', { with_cast: id, page });
  return api.fetchJson();
}
