import React from 'react';
import { shallow } from 'enzyme';
import Film from '../Film';

let fullProps;
let partialProps;

describe('Film', () => {
  beforeEach(() => {
    fullProps = {
      film: {
        id: 1,
        title: 'Pulp Fiction',
        poster_path: '/img1234_0987',
        release_date: '1999',
      },
      onClick: jest.fn,
    };

    partialProps = {
      film: {
        id: 2,
        title: 'Taxi',
      },
      onClick: jest.fn,
    };
  });

  it('renders correctly with full props', () => {
    const wrapper = shallow(<Film {...fullProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with partial props', () => {
    const wrapper = shallow(<Film {...partialProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
