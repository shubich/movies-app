import personDetails from '../personDetails';

jest.mock('../../utils');

let props;

describe('personDetails reducer', () => {
  beforeEach(() => {
    props = {
      details: {},
      fetching: false,
      error: '',
    };
  });

  it('should handle initial state', () => {
    expect(personDetails(undefined, {})).toEqual(props);
  });

  it('should handle GET_PERSON_DETAILS_REQUEST', () => {
    expect(personDetails(
      undefined,
      {
        type: 'GET_PERSON_DETAILS_REQUEST',
      },
    )).toEqual({
      ...props,
      fetching: true,
    });
  });

  it('should handle GET_PERSON_DETAILS_SUCCESS', () => {
    expect(personDetails(
      undefined,
      {
        type: 'GET_PERSON_DETAILS_SUCCESS',
        details: {},
      },
    )).toEqual({
      ...props,
      details: {},
    });
  });

  it('should handle GET_PERSON_DETAILS_FAILURE', () => {
    expect(personDetails(
      undefined,
      {
        type: 'GET_PERSON_DETAILS_FAILURE',
        error: 'something went wrong',
      },
    )).toEqual({
      ...props,
      error: 'something went wrong',
    });
  });
});
