import React from 'react';
import { Link } from 'react-router-dom';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.initialVal) {
            this.props.getFilms(this.props.initialVal)
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.searchQuery.value) {
            this.props.history.push(`/search/${this.searchQuery.value}`);
            this.props.getFilms(this.searchQuery.value)
        } else {
            this.searchQuery.focus();
        }
    }

    setRef = (node) => {
        if (node) this[node.name] = node;
    } 

    render() {
        return (
            <div>
                <div id='search-bar'>
                    <h2>FIND YOUR MOVIE</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type='text' 
                            name='searchQuery'
                            autoComplete='off'
                            defaultValue={this.props.initialVal}
                            placeholder='Pulp Fiction'
                            ref={this.setRef}
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