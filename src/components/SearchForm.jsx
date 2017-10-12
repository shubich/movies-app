import React from 'react';
import { Link } from 'react-router-dom';

export const SearchForm = () => (
    <div id='search-form'>
        <h2>FIND YOUR MOVIE</h2>
        <form action="">
            <input type="text" placeholder='Quentin Tarantino'/>
            <div id='search-props'>
                <span>SEARCH BY</span>
                <button className='btn btn-primary'>TITLE</button>
                <button className='btn btn-basic'>DIRECTOR</button>
            </div>
            <Link to='/search'>
                <button className='btn btn-primary btn-search'>SEARCH</button>                    
            </Link>
        </form>
    </div>
);