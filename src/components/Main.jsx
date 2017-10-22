import React from 'react';
import ReactLoading from 'react-loading';
import { Film } from './Film';
import { Person } from './Person';
import { NotFound } from './NotFound';

export class Main extends React.Component {    
    render() {
        return (
            (this.props.results.length || this.props.fetching) ?
            <main id='main'>
                <div className='container'>
                    {
                        this.props.fetching ?
                        <ReactLoading type='bars' color='#000' delay={0} />
                        :
                        this.props.results.map((item, i) => (
                            this.props.searchType == 'title' ?
                            <Film 
                                key={i} 
                                film={item}
                                onClick={this.props.onItemClick} 
                            />
                            :
                            <Person 
                                key={i} 
                                person={item}
                                onClick={this.props.onItemClick} 
                            />
                        ))
                    }
                </div>
            </main>
            :
            <NotFound />
        );
    }
}