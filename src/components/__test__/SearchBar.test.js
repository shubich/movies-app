import React from 'react';
import { SearchBar } from '../SearchBar';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';

let props;

describe('SearchBar', () => {
    beforeEach(() => {
        props = {
            initialVal: 2330,
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
        // const wrapperInstance = wrapper.instance(); // --shallow
        // wrapperInstance.searchQuery={value: 'something'}; // --shallow
        wrapper.find('form').simulate('submit', {preventDefault:jest.fn()})
        expect(props.getFilms).toBeCalledWith('2330');
    });

    it('should call getPeople', () => {
        const wrapper = mount(
            <SearchBar {...props} searchType={'person'} />
        );
        wrapper.find('form').simulate('submit', {preventDefault:jest.fn()})
        expect(props.getPeople).toBeCalledWith('2330');
    });

    it('should call input.focus()', () => {
        const focus = jest.fn();
        const wrapper = shallow(
            <SearchBar {...props} initialVal={''} />
        );
        const wrapperInstance = wrapper.instance(); // --shallow
        wrapperInstance.searchQuery={ focus }; // --shallow
        
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