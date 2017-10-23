import personDetails from '../personDetails';

let props;

describe('personDetails reducer', () => {
    beforeEach(() => {
        props = {
            details: {},
            fetching: false,
            error: ''
        };
    });

    it('should handle initial state', () => {
        expect(
            personDetails(undefined, {})
        ).toEqual(
            props
        )
    })

    it('should handle GET_PERSON_DETAILS_REQUEST', () => {
        expect(
            personDetails(
                undefined, 
                {
                    type: 'GET_PERSON_DETAILS_REQUEST'
                }
            )
        ).toEqual({
            ...props,
            fetching: true,
        })
    })

    it('should handle GET_PERSON_DETAILS_SUCCESS', () => {
        expect(
            personDetails(
                undefined, 
                {
                    type: 'GET_PERSON_DETAILS_SUCCESS',
                    details: {
                        "birthday": '1995-07-04', 
                        "place_of_birth": 'Brest, Belarus', 
                        "popularity": 5
                    }
                }
            )
        ).toEqual({
            ...props,
            details: {
                "birthday": 'Born: Jul 4, 1995', 
                "born": 'Born: Jul 4, 1995 in Brest, Belarus', 
                "deathday": null, 
                "died": null, 
                "place_of_birth": ' in Brest, Belarus', 
                "popularity": 5
            }
        })
    })

    it('should handle GET_PERSON_DETAILS_FAILURE', () => {
        expect(
            personDetails(
                undefined, 
                {
                    type: 'GET_PERSON_DETAILS_FAILURE',
                    error: 'something went wrong'
                }
            )
        ).toEqual({
            ...props,
            error: 'something went wrong'
        })
    })
})