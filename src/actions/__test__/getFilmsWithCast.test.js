import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getFilmWithCast from '../getFilmsWithCast';
import * as types from '../../constants/Films';
import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates GET_FILMS_SUCCESS when fetching films has been done', () => {
    // Mock the fetch() global to always return the same value for GET requests to all URLs.
    fetchMock.get('*', {results: ['taxi', 'wanted']});

    const expectedActions = [
      { type: types.GET_FILMS_REQUEST, query: 'test' },
      { type: types.GET_FILMS_SUCCESS, results: ['taxi', 'wanted'] }
    ]
    const store = mockStore({ films: [] })

    store.dispatch(getFilmWithCast('test')).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
    })
  })
})