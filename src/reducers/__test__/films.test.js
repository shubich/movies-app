import films from '../films';

let props;

describe('films reducer', () => {
  beforeEach(() => {
    props = {
      results: [],
      fetching: false,
      error: '',
    };
  });

  it('should handle initial state', () => {
    expect(films(undefined, {})).toEqual(props);
  });

  it('should handle GET_FILMS_REQUEST', () => {
    expect(films(
      undefined,
      {
        type: 'GET_FILMS_REQUEST',
      },
    )).toEqual({
      ...props,
      fetching: true,
    });
  });

  it('should handle GET_FILMS_SUCCESS', () => {
    expect(films(
      undefined,
      {
        type: 'GET_FILMS_SUCCESS',
        results: [{ name: 'a' }, { name: 'b' }],
      },
    )).toEqual({
      ...props,
      results: [{ name: 'a' }, { name: 'b' }],
    });
  });

  it('should handle GET_FILMS_FAILURE', () => {
    expect(films(
      undefined,
      {
        type: 'GET_FILMS_FAILURE',
        error: 'something went wrong',
      },
    )).toEqual({
      ...props,
      error: 'something went wrong',
    });
  });
});
