import React from 'react';
import { Status } from '../Status';
import { shallow } from 'enzyme';

let props;

describe('Status', () => {
    beforeEach(() => {
        props = {
            match: {
                url: '/film/680',
                params: {
                    id: '680'
                }
            },
            count: '20',
            sort: 'rating',
            handleSort: jest.fn            
        };
    });

    it('renders correctly with props', () => {
        const wrapper = shallow(
            <Status {...props} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly with another sort', () => {
        const wrapper = shallow(
            <Status {...props} sort='date' />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly without props', () => {
        const wrapper = shallow(
            <Status/>
        );
        expect(wrapper).toMatchSnapshot();
    });
})