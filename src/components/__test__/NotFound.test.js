import React from 'react';
import { NotFound } from '../NotFound';
import { shallow } from 'enzyme';

describe('NotFound', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <NotFound />
        );
        expect(wrapper).toMatchSnapshot();
    });
})