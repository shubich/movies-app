import React from 'react';
import { shallow, mount } from 'enzyme';
import { SearchBar } from '../SearchBar';

let props;

describe('SearchBar', () => {
  beforeEach(() => {
    props = {
      getFilms: jest.fn(),
      getPeople: jest.fn(),
      setSearchType: jest.fn(),
      history: { push: jest.fn() },
      searchType: 'title',
    };
  });

  it('renders correctly with props', () => {
    const wrapper = shallow(<SearchBar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with searchQuery', () => {
    const wrapper = shallow(<SearchBar {...props} searchQuery="test" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getFilms', () => {
    const wrapper = mount(<SearchBar {...props} />);
    wrapper.setProps({ ...props, searchQuery: 'test' });
    expect(props.getFilms).toBeCalledWith('test');
  });

  it('should call getPeople', () => {
    const wrapper = mount(<SearchBar {...props} />);
    wrapper.setProps({ ...props, searchType: 'person', searchQuery: 'test' });
    expect(props.getPeople).toBeCalledWith('test');
  });

  it('shouldn\'t get anything with same props', () => {
    const wrapper = mount(<SearchBar {...props} />);
    wrapper.setProps({ ...props });
    expect(props.getFilms).not.toBeCalled();
  });

  it('should call input.focus() when search line is empty', () => {
    const focus = jest.fn();
    const wrapper = shallow(<SearchBar {...props} />);
    const wrapperInstance = wrapper.instance(); // --shallow
    wrapperInstance.searchLine = { focus }; // --shallow

    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(focus).toBeCalled();
  });

  it('should call history.push() when search line is filled', () => {
    const wrapper = mount(<SearchBar {...props} searchQuery="test" />);
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(props.history.push).toBeCalled();
  });

  it('should call setSearchType on radio changes', () => {
    const wrapper = mount(<SearchBar {...props} />);
    wrapper.find('[checked=false]').simulate('change', { target: { value: 'test' } });
    expect(props.setSearchType).toBeCalledWith('test');
  });
});
