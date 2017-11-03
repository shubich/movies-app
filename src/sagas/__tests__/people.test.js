
import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { getPeople } from '../people';
import * as actions from '../../actions/getPeople';
import * as Api from '../../lib/api';

jest.mock('../../lib/api');
// jest.mock('../../actions/getPeople');

describe('people saga', () => {
  const query = 'test';
  const action = { query };
  const json = Api.requests.people(query);

  const data = {};
  data.gen = cloneableGenerator(getPeople)(action);

  it('people saga must put getPeopleRequest', () => {
    expect(data.gen.next().value).toEqual(put(actions.getPeopleRequest(query)));
  });

  it('people saga must call request', () => {
    expect(data.gen.next().value).toEqual(call(Api.requests.people, query));
  });

  it('people saga must put getPeopleSuccess', () => {
    data.clone = data.gen.clone();
    expect(data.gen.next(json).value).toEqual(put(actions.getPeopleSuccess(json.results)));
  });

  it('people saga must put getPeopleFailure', () => {
    expect(data.clone.next().value).toEqual(put(actions.getPeopleFailure("Cannot read property 'results' of undefined")));
  });
});

