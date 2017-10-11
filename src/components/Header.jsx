import React from 'react';
import {Nav} from './Nav'
import {SearchForm} from './SearchForm'
import {FilmDetails} from './FilmDetails'

export const Header = () => (
    <div id='header'>
        <div className='container'>
            <Nav />
            {/* <SearchForm /> */}
            <FilmDetails />
        </div>
    </div>
);