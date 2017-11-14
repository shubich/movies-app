import people from '../people';

let props;

describe('people reducer', () => {
  beforeEach(() => {
    props = {
      results: [],
      fetching: false,
      error: '',
    };
  });

  it('should handle initial state', () => {
    expect(people(undefined, {})).toEqual(props);
  });

  it('should handle GET_PEOPLE_REQUEST', () => {
    expect(people(
      undefined,
      {
        type: 'GET_PEOPLE_REQUEST',
      },
    )).toEqual({
      ...props,
      fetching: true,
    });
  });

  it('should handle GET_PEOPLE_SUCCESS', () => {
    expect(people(
      undefined,
      {
        type: 'GET_PEOPLE_SUCCESS',
        results: [{ name: 'a' }, { name: 'b' }],
      },
    )).toEqual({
      ...props,
      results: [{ name: 'a' }, { name: 'b' }],
    });
  });

  it('should handle GET_PEOPLE_FAILURE', () => {
    expect(people(
      undefined,
      {
        type: 'GET_PEOPLE_FAILURE',
        error: 'something went wrong',
      },
    )).toEqual({
      ...props,
      error: 'something went wrong',
    });
  });
});
