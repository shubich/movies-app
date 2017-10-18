import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getFilms from '../actions/getFilms';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.initialTitle = this.props.match.url.split('/')[2];
        if (this.initialTitle) {
            this.props.dispatch(getFilms(this.initialTitle))
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.searchQuery.value) {
            this.props.history.push(`/search/${this.searchQuery.value}`);
            this.props.dispatch(getFilms(this.searchQuery.value))
        } else {
            this.searchQuery.focus();
        }
    }

    render() {
        return (
            <div>
                <div id='search-bar'>
                    <h2>FIND YOUR MOVIE</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type='text' 
                            defaultValue={this.initialTitle}
                            placeholder='Pulp Fiction'
                            ref={node => {this.searchQuery = node}}
                        />
                        <div id='search-props'>
                            <span>SEARCH BY</span>
                            <button className='btn btn-primary'>TITLE</button>
                            <button className='btn btn-basic'>DIRECTOR</button>
                        </div>
                        <button type='submit' className='btn btn-primary btn-search'>SEARCH</button>
                    </form>
                </div>
            </div>
        )
    }
} 

export default SearchBar = connect()(SearchBar);