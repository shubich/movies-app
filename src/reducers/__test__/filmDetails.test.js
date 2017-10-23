import filmDetails from '../filmDetails';

let props;

describe('filmDetails reducer', () => {
    beforeEach(() => {
        props = {
            details: {},
            fetching: false,
            error: ''
        };
    });

    it('should handle initial state', () => {
        expect(
            filmDetails(undefined, {})
        ).toEqual(
            props
        )
    })

    it('should handle GET_FILM_DETAILS_REQUEST', () => {
        expect(
            filmDetails(
                undefined, 
                {
                    type: 'GET_FILM_DETAILS_REQUEST'
                }
            )
        ).toEqual({
            ...props,
            fetching: true,
        })
    })

    it('should handle GET_FILM_DETAILS_SUCCESS', () => {
        expect(
            filmDetails(
                undefined, 
                {
                    type: 'GET_FILM_DETAILS_SUCCESS',
                    details: {
                        genres: [
                            {id: 28, name: "Action"}, 
                            {id: 35, name: "Comedy"}
                        ],
                        release_date: '1998-04-04',
                        runtime: '86',
                        vote_average: 6.5
                    }
                }
            )
        ).toEqual({
            ...props,
            details: {
                genres: 'Action, Comedy',
                release_date: '1998',
                runtime: '86 min',
                vote_average: '6.5'
            }
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
            ...props,
            error: 'something went wrong'
        })
    })
})