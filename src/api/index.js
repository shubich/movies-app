export default class Api {
  constructor(path, json = {}) {
    this.path = path;
    this.query = Api.jsonToQueryString({ ...json, api_key: Api.key });
  }

  static host = 'https://api.themoviedb.org/';
  static key = '595f6d4c932627df7eb7d5c2f27a7e40';
  static imagePrefix = 'https://image.tmdb.org/t/p/w500';

  static jsonToQueryString(json) {
    return `?${
      Object.keys(json).map(key => `${encodeURIComponent(key)}=${
        encodeURIComponent(json[key])}`).join('&')}`;
  }

  fetchJson() {
    const url = Api.host + this.path + this.query;
    return fetch(url).then(res => res.json());
  }
}
