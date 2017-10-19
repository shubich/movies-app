import React from 'react';
import {Nav} from './Nav';
import { imagePrefix } from '../api/'

export class FilmDetails extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.fetching) {
            console.log('from Constructor')
            this.props.getFilmDetails();            
            this.props.getSimilarFilms();            
        }
    }

    componentWillReceiveProps(nextProps) {
        let currentId =  this.props.match.params.id;
        let nextId = nextProps.match.params.id;

        if (currentId != nextId) {
            console.log('from WillRECEIVE')            
            this.props.getFilmDetails(nextId);
            this.props.getSimilarFilms(nextId);
        }
    }
    
    checkDetails(details) {
        details.vote_average = (details.vote_average < 10) ? 
            details.vote_average.toFixed(1) 
            : 
            details.vote_average;

        details.genres = (details.genres) ? 
            details.genres.map((genre, i, arr) => {
                if (i+1 == arr.length) return genre.name;
                else return genre.name + ', ';
            })
            : 
            null;

        details.release_date = (details.release_date) ?
            details.release_date
            :
            null;

        details.runtime = (details.runtime) ?
            details.runtime + ' min'
            :
            null;

        return details;
    }

    render() {
        let details = this.checkDetails({...this.props.details});
        
        return (
            details.title ?
            <div>
                <div id='film-details'>
                    <div className='poster'>
                        <img src={imagePrefix+details.poster_path} alt="poster"/>
                    </div>
                    <div className='info'>
                        <h2>
                            <span className='title text-primary'>{details.title}</span>
                            <span className='rating'>{details.vote_average}</span>
                        </h2>
                        <p className='genre text-basic'>{details.genres}</p>
                        <p className='numbers'>
                            <span className='release-year'>{details.release_date}</span>
                            <span className='duration'>{details.runtime}</span>
                        </p>
                        <p className='description text-basic'>{details.overview}</p>
                        {/* <p className='director text-basic'>Director: Quentin Tarantino</p>
                        <p className='cast text-basic'>Cast: [...actors]</p> */}
                    </div>
    
                </div>
            </div>
            :
            null
        )
    }
}