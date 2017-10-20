import React from 'react';
import { Header } from '../Header';
import { shallow } from 'enzyme';

let props;

describe('Header', () => {
    beforeEach(() => {
        props = {
            children: 'test'
        }
    });

    it('renders correctly', () => {
        const wrapper = shallow(
            <Header {...props} />
        );
        expect(wrapper).toMatchSnapshot();
    });
})