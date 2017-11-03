import * as actions from '../getPeople';
import * as types from '../../constants/People';

const expectedActions = {
  async: query => ({
    type: types.GET_PEOPLE_ASYNC,
    query,
  }),
  request: query => ({
    type: types.GET_PEOPLE_REQUEST,
    query,
  }),
  success: query => ({
    type: types.GET_PEOPLE_SUCCESS,
    results: query,
  }),
  failure: query => ({
    type: types.GET_PEOPLE_FAILURE,
    error: query,
  }),
};

const query = 'test';

describe('getPeople actions', () => {
  it('getPeopleAsync should create GET_PEOPLE_ASYNC action', () => {
    expect(actions.getPeopleAsync(query)).toEqual(expectedActions.async(query));
  });
  it('getPeopleRequest should create GET_PEOPLE_REQUEST action', () => {
    expect(actions.getPeopleRequest(query)).toEqual(expectedActions.request(query));
  });
  it('getPeopleSuccess should create GET_PEOPLE_SUCCESS action', () => {
    expect(actions.getPeopleSuccess(query)).toEqual(expectedActions.success(query));
  });
  it('getPeopleFailure should create GET_PEOPLE_FAILURE action', () => {
    expect(actions.getPeopleFailure(query)).toEqual(expectedActions.failure(query));
  });
});
