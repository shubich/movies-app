import React from 'react';
import { Film } from '../Film';
import { shallow } from 'enzyme';

let props;

describe('Film', () => {
    beforeEach(() => {
        props = {
            film: {
                id: 1,
                title: 'Pulp Fiction',
                poster_path: '/img1234_0987',
                release_date: '1999'
            },
            onClick: jest.fn
        };
    });

    it('renders correctly', () => {
        const wrapper = shallow(
            <Film {...props} />
        );
        expect(wrapper).toMatchSnapshot();
    });
})