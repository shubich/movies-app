import getFilmDetails from '../getFilmDetails';
import * as types from '../../constants/Film';

jest.mock('../../api');

const expectedActions = {
  request: id => ({
    type: types.GET_FILM_DETAILS_REQUEST,
    id,
  }),
  success: () => ({
    type: types.GET_FILM_DETAILS_SUCCESS,
    details: {
      title: 'test',
    },
  }),
  failure: id => ({
    type: types.GET_FILM_DETAILS_FAILURE,
    error: new Error(`id: ${id}`),
  }),
};

describe('async actions', () => {
  it('works with promises [SUCCESS]', () => {
    const id = 1;
    const dispatch = jest.fn();
    const requestPeople = getFilmDetails(id)(dispatch);
    return requestPeople.then(() => {
      expect(dispatch.mock.calls[0][0]).toEqual(expectedActions.request(id));
      expect(dispatch.mock.calls[1][0]).toEqual(expectedActions.success(id));
    });
  });

  it('works with promises [FAILURE]', () => {
    const dispatch = jest.fn();
    const requestPeople = getFilmDetails()(dispatch);
    return requestPeople.then(() => {
      expect(dispatch.mock.calls[0][0]).toEqual(expectedActions.request());
      expect(dispatch.mock.calls[1][0]).toEqual(expectedActions.failure());
    });
  });
});
