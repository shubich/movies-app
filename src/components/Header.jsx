import React from 'react';
import {Nav} from './Nav'
import {SearchForm} from './SearchForm'

export const Header = () => (
    <div id='header'>
        <Nav />
        <SearchForm />
    </div>
);