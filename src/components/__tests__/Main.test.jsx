import React from 'react';
import { shallow } from 'enzyme';
import Main from '../Main';

let props;

describe('Main', () => {
  beforeEach(() => {
    props = {
      data: {
        results: [
          {
            id: 1,
            title: 'A',
          },
        ],
        fetching: false,
        error: '',
      },
      match: {
        params: {
          id: '1',
          query: 'test',
        },
        url: '/film/2330',
      },
      onFilmClick: jest.fn,
      searchType: 'title',
      getFilmsAsync: jest.fn,
      getPeopleAsync: jest.fn,
      getSimilarFilmsAsync: jest.fn,
      getFilmsWithCastAsync: jest.fn,
    };
  });

  it('renders correctly with props', () => {
    const wrapper = shallow(<Main {...props} />);
    expect(wrapper).toMatchSnapshot();
  });


  it('renders correctly with fetching', () => {
    const wrapper = shallow(<Main {...props} fetching />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly without results', () => {
    const wrapper = shallow(<Main {...props} results={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with another searchType', () => {
    const wrapper = shallow(<Main {...props} searchType="person" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly without searchType', () => {
    const wrapper = shallow(<Main {...props} searchType="" />);
    expect(wrapper).toMatchSnapshot();
  });
});
