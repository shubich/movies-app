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
                        "birthday": '1962-06-21', 
                        "deathday": '1990-08-15',
                        "place_of_birth": 'Moscow, Russia', 
                        "popularity": 5
                    }
                }
            )
        ).toEqual({
            ...props,
            details: {
                "birthday": 'Born: Jun 21, 1962', 
                "deathday": 'Died: Aug 15, 1990',
                "place_of_birth": ' in Moscow, Russia', 
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