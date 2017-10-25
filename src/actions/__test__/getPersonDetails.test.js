import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getPersonDetails from '../getPersonDetails';
import * as types from '../../constants/Person';
import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates GET_PERSON_DETAILS_SUCCESS when fetching person has been done', () => {
    // Mock the fetch() global to always return the same value for GET requests to all URLs.
    fetchMock.get('*', {name: 'Ivan'});

    const expectedActions = [
      { type: types.GET_PERSON_DETAILS_REQUEST, id: 1 },
      { type: types.GET_PERSON_DETAILS_SUCCESS, details: {name: 'Ivan'} }
    ]
    const store = mockStore({ personDetails: [] })

    store.dispatch(getPersonDetails(1)).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates GET_PERSON_DETAILS_FAILURE when fetching person has been done', () => {
    fetchMock.get('*', 500);

    const store = mockStore({ personDetails: [] })

    store.dispatch(getPersonDetails(1)).then(() => {        
        expect(store.getActions()[1].type).toEqual(types.GET_PERSON_DETAILS_FAILURE)
    })
  })
})