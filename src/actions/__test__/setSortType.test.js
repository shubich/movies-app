import setSortType from '../setSortType';

describe('setSortType action', () => {
    it('setSortType should create SET_SORT_TYPE action', () => {
        expect(setSortType('rating')).toEqual({
            type: 'SET_SORT_TYPE',
            filter: 'rating'
        })
    })
})