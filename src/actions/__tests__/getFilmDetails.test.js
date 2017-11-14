import * as actions from '../getFilmDetails';
import * as types from '../../constants/Film';

const id = 1;
const details = { title: 'Wanted' };
const error = 'something went wrong';

describe('getFilmDetails actions', () => {
  it('should create GET_FILM_DETAILS_ASYNC action', () => {
    expect(actions.getFilmDetailsAsync(id)).toEqual({
      type: types.GET_FILM_DETAILS_ASYNC,
      id,
    });
  });
  it('should create GET_FILM_DETAILS_REQUEST action', () => {
    expect(actions.getFilmDetailsRequest(id)).toEqual({
      type: types.GET_FILM_DETAILS_REQUEST,
      id,
    });
  });
  it('should create GET_FILM_DETAILS_SUCCESS action', () => {
    expect(actions.getFilmDetailsSuccess(details)).toEqual({
      type: types.GET_FILM_DETAILS_SUCCESS,
      details,
    });
  });
  it('should create GET_FILM_DETAILS_FAILURE action', () => {
    expect(actions.getFilmDetailsFailure(error)).toEqual({
      type: types.GET_FILM_DETAILS_FAILURE,
      error,
    });
  });
});
