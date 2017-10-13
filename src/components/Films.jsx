import React from 'react';
import {Film} from './Film';
import { movies } from '../data';

export const Films = (props) => {
    let visibleMovies;
    if (props.match.params.id) {
        const curFilmId = props.match.params.id;
        visibleMovies = movies.filter(movie =>
            movie.id != curFilmId
        )    
    } else visibleMovies = movies;
    return (
        <div id='films'>
            <div className='container'>
                {
                    visibleMovies.map((movie, i) => (
                        <Film key={i} {...movie}/>
                    ))
                }
            </div>
        </div>
    );
}