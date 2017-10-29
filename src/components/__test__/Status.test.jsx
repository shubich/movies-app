import React from 'react';
import { shallow } from 'enzyme';
import Status from '../Status';

let props;

describe('Status', () => {
  beforeEach(() => {
    props = {
      match: {
        url: '/film/680',
        params: {
          id: '680',
        },
      },
      count: 20,
      searchType: 'title',
      sortType: '',
      handleSort: jest.fn(),
    };
  });

  it('renders correctly with props', () => {
    const wrapper = shallow(<Status {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with another search type', () => {
    const wrapper = shallow(<Status {...props} searchType="person" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with sorting type', () => {
    const wrapper = shallow(<Status {...props} sortType="date" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with another sorting type', () => {
    const wrapper = shallow(<Status {...props} sortType="rating" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with empty results', () => {
    const wrapper = shallow(<Status {...props} count={0} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleSort with "date"', () => {
    const wrapper = shallow(<Status {...props} sortType="rating" />);
    wrapper.find('[value="date"]').simulate('change');

    expect(props.handleSort).toBeCalled();
  });

  it('should call handleSort with "rating"', () => {
    const wrapper = shallow(<Status {...props} sortType="date" />);
    wrapper.find('[value="rating"]').simulate('change');

    expect(props.handleSort).toBeCalled();
  });
});
