import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getFilms from '../getFilms';
// import * as actions from '../Actions';
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

    store.dispatch(getFilms('test')).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates GET_FILMS_FAILURE when fetching films has been done', () => {
    fetchMock.get('*', 500);

    const expectedActions = [
        { type: types.GET_FILMS_REQUEST, query: 'test' },      
        { 
            type: types.GET_FILMS_FAILURE, 
            error: {
                name: 'FetchError',
                message: 'invalid json response body at https://api.themoviedb.org/3/search/movie?api_key=595f6d4c932627df7eb7d5c2f27a7e40&language=en-US&include_adult=false&page=1&query=test reason: Unexpected end of JSON input',
                type: 'invalid-json' 
            } 
        }
    ]
    const store = mockStore({ films: [] })

    store.dispatch(getFilms('test')).then(() => {        
        expect(store.getActions()).toEqual(expectedActions)
    })
  })

})