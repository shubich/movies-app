import search from '../search';

let props;

describe('search reducer', () => {
    beforeEach(() => {
        props = {
            searchType: 'title',
            sortType: ''
        };
    });

    it('should handle initial state', () => {
        expect(
            search(undefined, {})
        ).toEqual(
            props
        )
    })

    it('should handle SET_SEARCH_TYPE', () => {
        expect(
            search(
                undefined, 
                {
                    type: 'SET_SEARCH_TYPE',
                    filter: 'person'
                }
            )
        ).toEqual({
            ...props,
            searchType: 'person'
        })
    })

    it('should handle SET_SORT_TYPE', () => {
        expect(
            search(
                undefined, 
                {
                    type: 'SET_SORT_TYPE',
                    filter: 'rating'
                }
            )
        ).toEqual({
            ...props,
            sortType: 'rating'
        })
    })
})