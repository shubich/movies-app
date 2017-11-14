import { call, put, takeEvery } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import watchPeopleAsync, { getPeople } from '../people';
import * as actions from '../../actions/getPeople';
import * as types from '../../constants/People';
import * as Api from '../../lib/api';

jest.mock('../../lib/api');

describe('people saga', () => {
  const query = 'test';
  const action = { query };
  const json = Api.requests.people(query);

  const data = {};
  data.gen = cloneableGenerator(getPeople)(action);

  it('getPeople success', () => {
    expect(data.gen.next().value).toEqual(put(actions.getPeopleRequest(query)));
    expect(data.gen.next().value).toEqual(call(Api.requests.people, query));
    data.clone = data.gen.clone();
    expect(data.gen.next(json).value).toEqual(put(actions.getPeopleSuccess(json.results)));
  });

  it('getPeople failure', () => {
    expect(data.clone.throw(Error('Something went wrong')).value).toEqual(put(actions.getPeopleFailure('Something went wrong')));
  });

  it('should trigger on GET_PEOPLE_ASYNC', () => {
    // arrange
    const iterator = watchPeopleAsync();
    const expectedYield = takeEvery(types.GET_PEOPLE_ASYNC, getPeople);

    // act
    const actualYield = iterator.next().value;

    // assert
    expect(actualYield).toEqual(expectedYield);
  });
});

