import search from '../search';

describe('search reducer', () => {
    it('should handle initial state', () => {
        expect(
            search(undefined, {})
        ).toEqual({
            searchType: 'title',
            sortType: ''
        })
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
            searchType: 'person',
            sortType: ''
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
            searchType: 'title',
            sortType: 'rating'
        })
    })
})