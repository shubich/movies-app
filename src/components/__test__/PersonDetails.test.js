import React from 'react';
import { shallow } from 'enzyme';
import { PersonDetails } from '../PersonDetails';

let props;

describe('PersonDetails', () => {
  beforeEach(() => {
    props = {
      details: {
        name: 'Pulp Fiction',
        profile_path: '/img1234_0987',
        popularity: '1999',
        birthday: '8.3',
        place_of_birth: ['Thriller', 'Crime'],
        deathday: '154',
        biography: 'Lorem ipsum dolor sit amet.',
      },
      getPersonDetails: jest.fn(),
      getFilmsWithCast: jest.fn(),
      setSearchType: jest.fn(),
    };
  });

  it('renders correctly with details', () => {
    const wrapper = shallow(<PersonDetails {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with fetching', () => {
    const wrapper = shallow(<PersonDetails {...props} fetching />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly without details', () => {
    const wrapper = shallow(<PersonDetails {...props} details={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
