import setSearchType from '../setSearchType';

describe('setSearchType action', () => {
  it('setSearchType should create SET_SEARCH_TYPE action', () => {
    expect(setSearchType('title')).toEqual({
      type: 'SET_SEARCH_TYPE',
      filter: 'title',
    });
  });
});
