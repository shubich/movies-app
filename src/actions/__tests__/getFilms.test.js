import * as actions from '../getFilms';
import * as types from '../../constants/Films';

const query = 'pulp fiction';
const results = [{ title: 'Wanted' }];
const error = 'something went wrong';

describe('getFilms actions', () => {
  it('should create GET_FILMS_ASYNC action', () => {
    expect(actions.getFilmsAsync(query)).toEqual({
      type: types.GET_FILMS_ASYNC,
      query,
    });
  });
  it('should create GET_FILMS_REQUEST action', () => {
    expect(actions.getFilmsRequest(query)).toEqual({
      type: types.GET_FILMS_REQUEST,
      query,
    });
  });
  it('should create GET_FILMS_SUCCESS action', () => {
    expect(actions.getFilmsSuccess(results)).toEqual({
      type: types.GET_FILMS_SUCCESS,
      results,
    });
  });
  it('should create GET_FILMS_FAILURE action', () => {
    expect(actions.getFilmsFailure(error)).toEqual({
      type: types.GET_FILMS_FAILURE,
      error,
    });
  });
});
