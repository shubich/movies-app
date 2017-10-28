import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import getPeople from '../getPeople';
import * as types from '../../constants/People';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates GET_PEOPLE_SUCCESS when fetching people has been done', () => {
    // Mock the fetch() global to always return the same value for GET requests to all URLs.
    fetchMock.get('*', { results: { name: 'Ivan' } });

    const expectedActions = [
      { type: types.GET_PEOPLE_REQUEST, query: 'test' },
      { type: types.GET_PEOPLE_SUCCESS, results: { name: 'Ivan' } },
    ];
    const store = mockStore({ people: [] });

    store.dispatch(getPeople('test')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates GET_PEOPLE_FAILURE when fetching people has been done', () => {
    fetchMock.get('*', 500);

    const store = mockStore({ people: [] });

    store.dispatch(getPeople('test')).then(() => {
      expect(store.getActions()[1].type).toEqual(types.GET_PEOPLE_FAILURE);
    });
  });
});
