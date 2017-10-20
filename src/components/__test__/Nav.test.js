import React from 'react';
import { Nav } from '../Nav';
import { shallow } from 'enzyme';

let props;

describe('Nav', () => {
    beforeEach(() => {
        props = {
            search: true
        }
    });

    it('renders correctly', () => {
        const wrapper = shallow(
            <Nav {...props} />
        );
        expect(wrapper).toMatchSnapshot();
    });
})