// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';
import getPeople from '../getPeople';
import * as types from '../../constants/People';

// Api.requests.people(query)
jest.mock('../../api', () => ({
  requests: {
    people: query => (
      new Promise((resolve, reject) => {
        process.nextTick(() => (query ? resolve({ json: () => ({ results: [{ name: query }] }) }) : reject(`query is ${query}`)));
      })
    ),
  },
}));

const expectedActions = {
  request: query => ({
    type: types.GET_PEOPLE_REQUEST,
    query,
  }),
  success: query => ({
    type: types.GET_PEOPLE_SUCCESS,
    results: [
      { name: query },
    ],
  }),
  failure: query => ({
    type: types.GET_PEOPLE_FAILURE,
    error: `query is ${query}`,
  }),
};

describe('async actions', () => {
  // afterEach(() => {
  // });

  // it('works with promises [SUCCESS]', () => {
  //   const dispatch = jest.fn();
  //   const requestPeople = getPeople('test')(dispatch);
  //   requestPeople.then(() => {
  //     expect(dispatch.mock.calls[0][0]).toEqual(expectedActions.request);
  //     expect(dispatch.mock.calls[1][0]).toEqual(expectedActions.success);
  //   });
  // });

  it('works with promises [FAILURE]', () => {
    const dispatch = jest.fn();
    const requestPeople = getPeople()(dispatch);
    requestPeople.then(() => {
      console.log(dispatch.mock.calls);

      expect(dispatch.mock.calls[0][0]).toEqual(expectedActions.request());
      expect(dispatch.mock.calls[1][0]).toEqual(expectedActions.failure());
    });
  });

  // it('creates GET_PEOPLE_SUCCESS when fetching people has been done', () => {
  //   // Mock the fetch() global to always return the same value for GET requests to all URLs.
  //   fetchMock.get('*', { results: { name: 'Ivan' } });

  //   const expectedActions = [
  //     { type: types.GET_PEOPLE_REQUEST, query: 'test' },
  //     { type: types.GET_PEOPLE_SUCCESS, results: { name: 'Ivan' } },
  //   ];
  //   const store = mockStore({ people: [] });

  //   store.dispatch(getPeople('test')).then(() => {
  //     // return of async actions
  //     expect(store.getActions()).toEqual(expectedActions);
  //   });
  // });

  // it('creates GET_PEOPLE_FAILURE when fetching people has been done', () => {
  //   fetchMock.get('*', 500);

  //   const store = mockStore({ people: [] });

  //   store.dispatch(getPeople('test')).then(() => {
  //     expect(store.getActions()[1].type).toEqual(types.GET_PEOPLE_FAILURE);
  //   });
  // });
});
