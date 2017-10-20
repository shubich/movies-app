import React from 'react';
import { Films } from '../Films';
import { shallow } from 'enzyme';

let props;

describe('Films', () => {
    beforeEach(() => {
        props = {
            results: [
                {
                    id: 1,
                    title: 'A'
                },
                {
                    id: 2,
                    title: 'B'
                }
            ],
            fetching: false,
            error: '',
            onFilmClick: jest.fn
        };
    });

    it('renders correctly', () => {
        const wrapper = shallow(
            <Films {...props} />
        );
        expect(wrapper).toMatchSnapshot();
    });
})