import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getFilmDetails from '../getFilmDetails';
import * as types from '../../constants/Film';
import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates GET_FILM_DETAILS_SUCCESS when fetching film has been done', () => {
    // Mock the fetch() global to always return the same value for GET requests to all URLs.
    fetchMock.get('*', {title: 'wanted'});

    const expectedActions = [
      { type: types.GET_FILM_DETAILS_REQUEST, id: 1 },
      { type: types.GET_FILM_DETAILS_SUCCESS, details: {title: 'wanted'} }
    ]
    const store = mockStore({ filmDetails: [] })

    store.dispatch(getFilmDetails(1)).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates GET_FILM_DETAILS_FAILURE when fetching film has been done', () => {
    fetchMock.get('*', 500);

    const expectedActions = [
        { type: types.GET_FILM_DETAILS_REQUEST, id: 1 },      
        { 
            type: types.GET_FILM_DETAILS_FAILURE, 
            error: {
                name: 'FetchError',
                message: 'invalid json response body at https://api.themoviedb.org/3/movie/1?api_key=595f6d4c932627df7eb7d5c2f27a7e40 reason: Unexpected end of JSON input',
                type: 'invalid-json' 
            } 
        }
    ]
    const store = mockStore({ filmDetails: [] })

    store.dispatch(getFilmDetails(1)).then(() => {        
        expect(store.getActions()).toEqual(expectedActions)
    })
  })

})