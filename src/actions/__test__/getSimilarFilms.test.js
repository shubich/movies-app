import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import getSimilarFilms from '../getSimilarFilms';
import * as types from '../../constants/Films';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates GET_SIMILAR_FILMS_SUCCESS when fetching similar films has been done', () => {
    // Mock the fetch() global to always return the same value for GET requests to all URLs.
    fetchMock.get('*', { results: ['taxi', 'wanted'] });

    const expectedActions = [
      { type: types.GET_SIMILAR_FILMS_REQUEST, id: 1 },
      { type: types.GET_SIMILAR_FILMS_SUCCESS, results: ['taxi', 'wanted'] },
    ];
    const store = mockStore({ films: [] });

    store.dispatch(getSimilarFilms(1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates GET_SIMILAR_FILMS_FAILURE when fetching similar films has been done', () => {
    fetchMock.get('*', 500);

    const store = mockStore({ films: [] });

    store.dispatch(getSimilarFilms(1)).then(() => {
      expect(store.getActions()[1].type).toEqual(types.GET_SIMILAR_FILMS_FAILURE);
    });
  });
});
