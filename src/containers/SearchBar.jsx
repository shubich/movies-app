import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getFilms from '../actions/getFilms';

let SearchBar = ({ dispatch }) => {
    let searchQuery;
    return (
        <div>
            <div id='search-bar'>
                <h2>FIND YOUR MOVIE</h2>
                <form action="">
                    <input 
                        type='text' 
                        placeholder='Pulp Fiction'
                        ref={node => {searchQuery = node}}
                    />
                    <div id='search-props'>
                        <span>SEARCH BY</span>
                        <button className='btn btn-primary'>TITLE</button>
                        <button className='btn btn-basic'>DIRECTOR</button>
                    </div>
                    <Link 
                        to={'/search/'+searchQuery}
                        onClick={(e) => {
                            if (!searchQuery.value) {
                                e.preventDefault();
                                searchQuery.focus();
                            } else {
                                dispatch(getFilms(searchQuery.value))
                            }
                        }}
                    >
                        <button className='btn btn-primary btn-search'>SEARCH</button>                    
                    </Link>
                </form>
            </div>
        </div>
    )
};

export default SearchBar = connect()(SearchBar);