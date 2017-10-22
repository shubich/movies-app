import React from 'react';
import { Link } from 'react-router-dom';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.initialVal) {
            this.props.getFilms(this.props.initialVal)
        }
    }

    getContent(searchType) {
        if (this.searchQuery.value) {
            this.props.history.push(`/search/${this.searchQuery.value}`);
            
            switch(searchType) {
                case 'title':
                    this.props.getFilms(this.searchQuery.value);
                    break;
                case 'person':
                    this.props.getPeople(this.searchQuery.value);
                    break;
            }
            
        } else {
            this.searchQuery.focus();
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.getContent(this.props.searchType);
    }

    handleOptionChange = (changeEvent) => {
        this.props.setSearchType(changeEvent.target.value);
        this.getContent(changeEvent.target.value);
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

                            <label className={'prop btn btn-'+(this.props.searchType == 'title' ? 'primary' : 'basic')}>
                                <input type="radio" value="title" 
                                    checked={this.props.searchType === 'title'} 
                                    onChange={this.handleOptionChange} />
                                TITLE
                            </label>

                            <label className={'prop btn btn-'+(this.props.searchType == 'person' ? 'primary' : 'basic')}>
                                <input type="radio" value="person" 
                                    checked={this.props.searchType === 'person'}                 
                                    onChange={this.handleOptionChange} />
                                DIRECTOR
                            </label>
                        </div>
                        <button type='submit' className='btn btn-primary btn-search'>SEARCH</button>
                    </form>
                </div>
            </div>
        )
    }
}