import React from 'react';
import { SearchBar } from '../SearchBar';
import { shallow } from 'enzyme';

let props;

describe('SearchBar', () => {
    beforeEach(() => {
        props = {
            initialVal: 2330,
            getFilms: (id) => [
                {
                    id: 535,                    
                    title: 'similar'
                },
                {
                    id: 737,
                    title: 'another'
                }
            ],
            history: jest.fn 
        };
    });

    it('renders correctly with props', () => {
        const wrapper = shallow(
            <SearchBar {...props} />
        );
        expect(wrapper).toMatchSnapshot();
    });

})