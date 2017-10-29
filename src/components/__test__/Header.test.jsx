import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

let props;

describe('Header', () => {
  beforeEach(() => {
    props = {
      children: [
        <div key={1}>test</div>,
      ],
    };
  });

  it('renders correctly', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
