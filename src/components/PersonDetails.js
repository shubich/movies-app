import React from 'react';
import ReactLoading from 'react-loading';
import { Poster } from './Poster';

export class PersonDetails extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.fetching) {
            this.props.getPersonDetails();            
            this.props.getFilmsWithCast();
            this.props.setSearchType();            
        }
    }
    
    render() {
        let details = this.props.details;
        
        return (
            (details.name || this.props.fetching) ?
            <div>
                {
                    this.props.fetching ?
                    <ReactLoading type='bars' delay={0} />
                    :
                    <div id='details'>
                        <Poster path={details.profile_path} />
                        <div className='info'>
                            <h2>
                                <span className='title text-primary'>{details.name}</span>
                                <span className='rating'>{details.popularity}</span>
                            </h2>
                            <p className='numbers'>
                                {details.born}
                            </p>
                            <p className='numbers'>
                                {details.died}
                            </p>
                            <p className='text-basic'>{details.biography}</p>
                        </div>
                    </div>
                }

            </div>
            :
            null
        )
    }
}