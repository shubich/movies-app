import getPeople from '../getPeople';
import * as types from '../../constants/People';

jest.mock('../../lib/api');

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
    error: new Error(`query: ${query}`),
  }),
};

describe('async actions', () => {
  it('works with promises [SUCCESS]', () => {
    const query = 'test';
    const dispatch = jest.fn();
    const request = getPeople(query)(dispatch);
    return request.then(() => {
      expect(dispatch.mock.calls[0][0]).toEqual(expectedActions.request(query));
      expect(dispatch.mock.calls[1][0]).toEqual(expectedActions.success(query));
    });
  });

  it('works with promises [FAILURE]', () => {
    const dispatch = jest.fn();
    const request = getPeople()(dispatch);
    return request.then(() => {
      expect(dispatch.mock.calls[0][0]).toEqual(expectedActions.request());
      expect(dispatch.mock.calls[1][0]).toEqual(expectedActions.failure());
    });
  });
});
