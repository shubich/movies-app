import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../Nav';

describe('Nav', () => {
  it('renders correctly with search', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly without search', () => {
    const wrapper = shallow(<Nav search={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
