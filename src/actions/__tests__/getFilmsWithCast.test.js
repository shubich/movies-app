import * as actions from '../getFilmsWithCast';
import * as types from '../../constants/Films';

const id = 101;
const results = [{ title: 'Matrix' }];
const error = 'something went wrong';

describe('getFilmsWithCast actions', () => {
  it('should create GET_FILMS_WITH_CAST_ASYNC action', () => {
    expect(actions.getFilmsWithCastAsync(id)).toEqual({
      type: types.GET_FILMS_WITH_CAST_ASYNC,
      id,
    });
  });
  it('should create GET_FILMS_WITH_CAST_REQUEST action', () => {
    expect(actions.getFilmsWithCastRequest(id)).toEqual({
      type: types.GET_FILMS_WITH_CAST_REQUEST,
      id,
    });
  });
  it('should create GET_FILMS_WITH_CAST_SUCCESS action', () => {
    expect(actions.getFilmsWithCastSuccess(results)).toEqual({
      type: types.GET_FILMS_WITH_CAST_SUCCESS,
      results,
    });
  });
  it('should create GET_FILMS_WITH_CAST_FAILURE action', () => {
    expect(actions.getFilmsWithCastFailure(error)).toEqual({
      type: types.GET_FILMS_WITH_CAST_FAILURE,
      error,
    });
  });
});
