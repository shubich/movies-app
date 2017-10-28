import React from 'react';
import { Main } from '../Main';
import { shallow } from 'enzyme';

let props;

describe('Main', () => {
  beforeEach(() => {
    props = {
      results: [
        {
          id: 1,
          title: 'A',
        },
        {
          id: 2,
          title: 'B',
        },
      ],
      fetching: false,
      error: '',
      onFilmClick: jest.fn,
      searchType: 'title',
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

  it('renders correctly without searchType', () => {
    const wrapper = shallow(<Main {...props} searchType="" />);
    expect(wrapper).toMatchSnapshot();
  });
});
