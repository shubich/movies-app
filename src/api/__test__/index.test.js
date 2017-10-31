import fetchMock from 'fetch-mock';
import * as Api from '../';

describe('Api requests', () => {
  it('fetching data', () => {
    const query = 'test';
    fetchMock.get('*', { response: query });

    Object.keys(Api.requests).forEach(key => Api.requests[key](query)
      .then(res => res.json())
      .then(json => expect(json).toEqual({ response: `${query}` })));

    // return Api.requests.details(query)
    //   .then(res => res.json())
    //   .then(json => expect(json).toEqual({ response: query+'1' }));
  });
});
