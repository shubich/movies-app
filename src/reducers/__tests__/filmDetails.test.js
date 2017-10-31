import filmDetails from '../filmDetails';

jest.mock('../../utils');

let props;

describe('filmDetails reducer', () => {
  beforeEach(() => {
    props = {
      details: {},
      fetching: false,
      error: '',
    };
  });

  it('should handle initial state', () => {
    expect(filmDetails(undefined, {})).toEqual(props);
  });

  it('should handle GET_FILM_DETAILS_REQUEST', () => {
    expect(filmDetails(
      undefined,
      {
        type: 'GET_FILM_DETAILS_REQUEST',
      },
    )).toEqual({
      ...props,
      fetching: true,
    });
  });

  it('should handle GET_FILM_DETAILS_SUCCESS', () => {
    expect(filmDetails(
      undefined,
      {
        type: 'GET_FILM_DETAILS_SUCCESS',
        details: {},
      },
    )).toEqual({
      ...props,
    });
  });

  it('should handle GET_FILM_DETAILS_FAILURE', () => {
    expect(filmDetails(
      undefined,
      {
        type: 'GET_FILM_DETAILS_FAILURE',
        error: 'something went wrong',
      },
    )).toEqual({
      ...props,
      error: 'something went wrong',
    });
  });
});
