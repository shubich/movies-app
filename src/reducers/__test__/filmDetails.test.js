import filmDetails from '../filmDetails';

describe('filmDetails reducer', () => {
    it('should handle initial state', () => {
        expect(
            filmDetails(undefined, {})
        ).toEqual({
            details: {},
            fetching: false,
            error: ''
        })
    })

    it('should handle GET_FILM_DETAILS_REQUEST', () => {
        expect(
            filmDetails(
                undefined, 
                {
                    type: 'GET_FILM_DETAILS_REQUEST',
                    details: {},
                    fetching: false,
                    error: ''
                }
            )
        ).toEqual({
            details: {},
            fetching: true,
            error: ''
        })
    })

    it('should handle GET_FILM_DETAILS_SUCCESS', () => {
        expect(
            filmDetails(
                undefined, 
                {
                    type: 'GET_FILM_DETAILS_SUCCESS',
                    details: {
                        genres: ['Action', 'Comedy', 'Crime'],
                        release_date: '1998-04-04',
                        runtime: '86',
                        vote_average: '6.5'
                    }
                }
            )
        ).toEqual({
            details: {
                genres: ['Action', 'Comedy', 'Crime'],
                release_date: '1998-04-04',
                runtime: '86',
                vote_average: 10
            },
            fetching: false,
            error: ''
        })
    })

    it('should handle GET_FILM_DETAILS_FAILURE', () => {
        expect(
            filmDetails(
                undefined, 
                {
                    type: 'GET_FILM_DETAILS_FAILURE',
                    error: 'something went wrong'
                }
            )
        ).toEqual({
            details: {},
            fetching: false,
            error: 'something went wrong'
        })
    })
})