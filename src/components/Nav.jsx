import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Nav = () => (
    <div id='nav'>
        <h1 className='sitename'>netflixroulette</h1>
        <Switch>
            <Route path='/movie'>
                <Link to='/'>
                    <button className='btn btn-default btn-search'>SEARCH</button>            
                </Link>
            </Route>
        </Switch>
    </div>
);