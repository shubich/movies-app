import React from 'react';
import { FilmDetails } from '../FilmDetails';
import { shallow } from 'enzyme';

let props;

describe('FilmDetails', () => {
    beforeEach(() => {
        props = {
            details: {
                title: 'Pulp Fiction',
                poster_path: '/img1234_0987',
                release_date: '1999',
                vote_average: '8.3',
                genres: ['Thriller', 'Crime'],
                runtime: '154',
                overview: 'Lorem ipsum dolor sit amet.'
            },
            match: {
                params: {
                    id: '680'
                }
            },
            getFilmDetails: jest.fn(),
            getSimilarFilms: jest.fn()
        };
    });

    it('renders correctly with details', () => {
        const wrapper = shallow(
            <FilmDetails {...props} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly with newProps', () => {
        const wrapper = shallow(
            <FilmDetails {...props} />
        );
        wrapper.setProps({...props, match: {params: {id: '221'}}});
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly with fetching', () => {
        const wrapper = shallow(
            <FilmDetails {...props} fetching={true} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly without details', () => {
        const wrapper = shallow(
            <FilmDetails {...props} details={[]} />
        );
        expect(wrapper).toMatchSnapshot();
    });
})