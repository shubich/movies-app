import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {SearchBar} from './SearchBar';
import {FilmDetails} from './FilmDetails';

export const Header = () => (
    <header id='header'>
        <div className='container'>
            <Switch>
                <Route path='/film/:id' component={FilmDetails}/>
                <Route path='*' component={SearchBar}/>
            </Switch>
        </div>
    </header>
);