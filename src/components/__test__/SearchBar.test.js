import React from 'react';
import { SearchBar } from '../SearchBar';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';

let props;

describe('SearchBar', () => {
    beforeEach(() => {
        props = {
            searchQuery: 'taxi',
            getFilms: jest.fn(),
            getPeople: jest.fn(),
            setSearchType: jest.fn(),
            history: { push: jest.fn() },
            searchType: 'title' 
        };
    });

    it('renders correctly with props', () => {
        const wrapper = shallow(
            <SearchBar {...props} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly with empty searchQuery', () => {
        const wrapper = shallow(
            <SearchBar {...props} />
        );
        wrapper.setProps({...props, searchQuery: null});        
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly with another search type', () => {
        const wrapper = shallow(
            <SearchBar {...props} searchType='person' />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should call getFilms', () => {
        const wrapper = mount(
            <SearchBar {...props} />
        );
        
        expect(props.getFilms).toBeCalledWith(props.searchQuery);
    });

    it('should call getFilms after receive props', () => {
        const wrapper = mount(
            <SearchBar {...props} />
        );
        wrapper.setProps({...props, searchQuery: 'Smith'});
        expect(props.getFilms).toBeCalledWith('Smith');
    });

    it('should call getPeople after receive props', () => {
        const wrapper = mount(
            <SearchBar {...props} />
        );
        wrapper.setProps({...props, searchType: 'person'});
        expect(props.getPeople).toBeCalledWith(props.searchQuery);
    });

    it('should call input.focus()', () => {
        const focus = jest.fn();
        const wrapper = shallow(
            <SearchBar {...props} searchQuery={''} />
        );
        const wrapperInstance = wrapper.instance(); // --shallow
        wrapperInstance.searchLine={ focus }; // --shallow
        
        wrapper.find('form').simulate('submit', {preventDefault:jest.fn()})
        expect(focus).toBeCalled();
    });

    it('should call setSearchType on radio changes', () => {
        const wrapper = mount(
            <SearchBar {...props} />
        );
        
        wrapper.find('[checked=false]').simulate('change', {target: {value: 'test'}});
        expect(props.setSearchType).toBeCalledWith('test');
    })
})