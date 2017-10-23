import people from '../people';

describe('people reducer', () => {
    it('should handle initial state', () => {
        expect(
            people(undefined, {})
        ).toEqual({
            results: [],
            fetching: false,
            error: ''
        })
    })

    it('should handle GET_PEOPLE_REQUEST', () => {
        expect(
            people(
                undefined, 
                {
                    type: 'GET_PEOPLE_REQUEST',
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

    it('should handle GET_PEOPLE_SUCCESS', () => {
        expect(
            people(
                undefined, 
                {
                    type: 'GET_PEOPLE_SUCCESS',
                    results: [{name: 'a'}, {name: 'b'}]
                }
            )
        ).toEqual({
            results: [{name: 'a'}, {name: 'b'}],
            fetching: false,
            error: ''
        })
    })

    it('should handle GET_PEOPLE_FAILURE', () => {
        expect(
            people(
                undefined, 
                {
                    type: 'GET_PEOPLE_FAILURE',
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