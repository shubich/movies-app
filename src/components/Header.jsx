import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Nav} from './Nav';
import {SearchForm} from './SearchForm';
import {FilmDetails} from './FilmDetails';

export const Header = () => (
    <header id='header'>
        <div className='container'>
            <Nav />
            <Switch>
                <Route exact path='/' component={SearchForm}/>
                <Route path='/movie' component={FilmDetails}/>
            </Switch>
        </div>
    </header>
);