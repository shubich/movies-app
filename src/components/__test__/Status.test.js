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
            handleSort: jest.fn,
            searchType: 'title',
            sortType: 'date',            
        };
    });

    it('renders correctly with props', () => {
        const wrapper = shallow(
            <Status {...props} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    // it('renders correctly with another sorting type', () => {
    //     const wrapper = shallow(
    //         <Status {...props} sortType='date' />
    //     );
    //     expect(wrapper).toMatchSnapshot();
    // });

    it('renders correctly with another search type', () => {
        const wrapper = shallow(
            <Status {...props} searchType='person' />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly with another sorting type', () => {
        const wrapper = shallow(
            <Status {...props} sortType='rating' />
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