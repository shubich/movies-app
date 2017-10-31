import getFilmWithCast from '../getFilmsWithCast';
import * as types from '../../constants/Films';

jest.mock('../../api');

const expectedActions = {
  request: id => ({
    type: types.GET_FILMS_REQUEST,
    id,
  }),
  success: () => ({
    type: types.GET_FILMS_SUCCESS,
    results: [
      { title: 'test' },
    ],
  }),
  failure: id => ({
    type: types.GET_FILMS_FAILURE,
    error: new Error(`id: ${id}`),
  }),
};

describe('async actions', () => {
  it('works with promises [SUCCESS]', () => {
    const id = 'test';
    const dispatch = jest.fn();
    const request = getFilmWithCast(id)(dispatch);
    return request.then(() => {
      expect(dispatch.mock.calls[0][0]).toEqual(expectedActions.request(id));
      expect(dispatch.mock.calls[1][0]).toEqual(expectedActions.success(id));
    });
  });

  it('works with promises [FAILURE]', () => {
    const dispatch = jest.fn();
    const request = getFilmWithCast()(dispatch);
    return request.then(() => {
      expect(dispatch.mock.calls[0][0]).toEqual(expectedActions.request());
      expect(dispatch.mock.calls[1][0]).toEqual(expectedActions.failure());
    });
  });
});
