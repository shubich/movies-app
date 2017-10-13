import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = ({search = true}) => (
    <div id='nav'>
        <h1 className='sitename'>netflixroulette</h1>
        {
            search ? (
                <Link to='/'>
                    <button className='btn btn-default btn-search'>SEARCH</button>            
                </Link>
            ) : null
        }
    </div>
);