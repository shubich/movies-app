import React from 'react';
import { shallow } from 'enzyme';
import { Poster } from '../Poster';

let props;

describe('Poster', () => {
  beforeEach(() => {
    props = {
      path: '/mUrkppyahzk6koYFekxeu0tmcPd.jpg',
    };
  });

  it('renders correctly with img', () => {
    const wrapper = shallow(<Poster {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly without img', () => {
    const wrapper = shallow(<Poster />);
    expect(wrapper).toMatchSnapshot();
  });
});
