import * as actions from '../getPeople';
import * as types from '../../constants/People';

const query = 'test';
const results = [{ name: 'Ivan' }];
const error = 'something went wrong';

describe('getPeople actions', () => {
  it('getPeopleAsync should create GET_PEOPLE_ASYNC action', () => {
    expect(actions.getPeopleAsync(query)).toEqual({
      type: types.GET_PEOPLE_ASYNC,
      query,
    });
  });
  it('getPeopleRequest should create GET_PEOPLE_REQUEST action', () => {
    expect(actions.getPeopleRequest(query)).toEqual({
      type: types.GET_PEOPLE_REQUEST,
      query,
    });
  });
  it('getPeopleSuccess should create GET_PEOPLE_SUCCESS action', () => {
    expect(actions.getPeopleSuccess(results)).toEqual({
      type: types.GET_PEOPLE_SUCCESS,
      results,
    });
  });
  it('getPeopleFailure should create GET_PEOPLE_FAILURE action', () => {
    expect(actions.getPeopleFailure(error)).toEqual({
      type: types.GET_PEOPLE_FAILURE,
      error,
    });
  });
});
