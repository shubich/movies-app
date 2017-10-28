import React from 'react';
import { shallow } from 'enzyme';
import { Person } from '../Person';

let fullProps;
let partialProps;

describe('Person', () => {
  beforeEach(() => {
    fullProps = {
      person: {
        id: 1,
        name: 'Ivan',
        profile_path: '/img1234_0987',
        popularity: 8,
      },
      onClick: jest.fn,
    };

    partialProps = {
      person: {
        id: 2,
        name: 'Vasiliy',
      },
      onClick: jest.fn,
    };
  });

  it('renders correctly with full props', () => {
    const wrapper = shallow(<Person {...fullProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with partial props', () => {
    const wrapper = shallow(<Person {...partialProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
