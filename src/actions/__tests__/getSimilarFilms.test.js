import * as actions from '../getSimilarFilms';
import * as types from '../../constants/Films';

const id = 101;
const results = [{ title: 'Titanic' }];
const error = 'something went wrong';

describe('getSimilarFilms actions', () => {
  it('should create GET_SIMILAR_FILMS_ASYNC action', () => {
    expect(actions.getSimilarFilmsAsync(id)).toEqual({
      type: types.GET_SIMILAR_FILMS_ASYNC,
      id,
    });
  });
  it('should create GET_SIMILAR_FILMS_REQUEST action', () => {
    expect(actions.getSimilarFilmsRequest(id)).toEqual({
      type: types.GET_SIMILAR_FILMS_REQUEST,
      id,
    });
  });
  it('should create GET_SIMILAR_FILMS_SUCCESS action', () => {
    expect(actions.getSimilarFilmsSuccess(results)).toEqual({
      type: types.GET_SIMILAR_FILMS_SUCCESS,
      results,
    });
  });
  it('should create GET_SIMILAR_FILMS_FAILURE action', () => {
    expect(actions.getSimilarFilmsFailure(error)).toEqual({
      type: types.GET_SIMILAR_FILMS_FAILURE,
      error,
    });
  });
});
