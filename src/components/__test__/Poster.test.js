import React from 'react';
import { Poster } from '../Poster';
import { shallow } from 'enzyme';

let props;

describe('Poster', () => {
    beforeEach(() => {
        props = {
            path: '/mUrkppyahzk6koYFekxeu0tmcPd.jpg'
        }
    });

    it('renders correctly with img', () => {
        const wrapper = shallow(
            <Poster {...props} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly without img', () => {
        const wrapper = shallow(
            <Poster/>
        );
        expect(wrapper).toMatchSnapshot();
    });
})