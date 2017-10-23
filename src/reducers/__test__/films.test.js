import films from '../films';

describe('films reducer', () => {
    it('should handle initial state', () => {
        expect(
            films(undefined, {})
        ).toEqual({
            results: [],
            fetching: false,
            error: ''
        })
    })

    it('should handle GET_FILMS_REQUEST', () => {
        expect(
            films(
                undefined, 
                {
                    type: 'GET_FILMS_REQUEST',
                    results: [],
                    fetching: false,
                    error: ''
                }
            )
        ).toEqual({
            results: [],
            fetching: true,
            error: ''
        })
    })

    it('should handle GET_FILMS_SUCCESS', () => {
        expect(
            films(
                undefined, 
                {
                    type: 'GET_FILMS_SUCCESS',
                    results: [{name: 'a'}, {name: 'b'}]
                }
            )
        ).toEqual({
            results: [{name: 'a'}, {name: 'b'}],
            fetching: false,
            error: ''
        })
    })

    it('should handle GET_FILMS_FAILURE', () => {
        expect(
            films(
                undefined, 
                {
                    type: 'GET_FILMS_FAILURE',
                    error: 'something went wrong'
                }
            )
        ).toEqual({
            results: [],
            fetching: false,
            error: 'something went wrong'
        })
    })
})