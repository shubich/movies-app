import React from 'react';
import { Nav } from '../Nav';
import { shallow } from 'enzyme';

let props;

describe('Nav', () => {
    it('renders correctly with search', () => {
        const wrapper = shallow(
            <Nav/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly without search', () => {
        const wrapper = shallow(
            <Nav search={false} />
        );
        expect(wrapper).toMatchSnapshot();
    });
})