import * as actions from '../getPersonDetails';
import * as types from '../../constants/Person';

const id = 1;
const details = { name: 'Jack' };
const error = 'something went wrong';

describe('getPersonDetails actions', () => {
  it('should create GET_PERSON_DETAILS_ASYNC action', () => {
    expect(actions.getPersonDetailsAsync(id)).toEqual({
      type: types.GET_PERSON_DETAILS_ASYNC,
      id,
    });
  });
  it('should create GET_PERSON_DETAILS_REQUEST action', () => {
    expect(actions.getPersonDetailsRequest(id)).toEqual({
      type: types.GET_PERSON_DETAILS_REQUEST,
      id,
    });
  });
  it('should create GET_PERSON_DETAILS_SUCCESS action', () => {
    expect(actions.getPersonDetailsSuccess(details)).toEqual({
      type: types.GET_PERSON_DETAILS_SUCCESS,
      details,
    });
  });
  it('should create GET_PERSON_DETAILS_FAILURE action', () => {
    expect(actions.getPersonDetailsFailure(error)).toEqual({
      type: types.GET_PERSON_DETAILS_FAILURE,
      error,
    });
  });
});
