import React from 'react';
import { Link } from 'react-router-dom';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.searchQuery) {
            this.props.getFilms(this.props.searchQuery)
        }
    }

    componentWillReceiveProps(nextProps) {
        this.searchLine.value = nextProps.searchQuery || '';
        if (
            (this.props.searchQuery !== nextProps.searchQuery
            || this.props.searchType !== nextProps.searchType)
            && nextProps.searchQuery
        ) {
            switch (nextProps.searchType) {
                case 'title':
                    this.props.getFilms(nextProps.searchQuery);
                    break;
                case 'person':
                    this.props.getPeople(nextProps.searchQuery);
                    break;
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.searchLine.value) {
            this.props.history.push(`/search/${this.searchLine.value}`);          
        } else {
            this.searchLine.focus();
        }
    }

    handleOptionChange = (changeEvent) => {
        this.props.setSearchType(changeEvent.target.value);
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
                            name='searchLine'
                            autoComplete='off'
                            defaultValue={this.props.searchQuery}
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