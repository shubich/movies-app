import React from 'react';
import {Film} from './Film';
import { movies } from '../data';

export const SimilarFilms = (props) => {
    const curFilmId = props.match.params.id;
    const similarFilms = movies.filter(movie =>
        movie.id != curFilmId
    )
    return (
        <div id='films'>
            <div className='container'>
                {
                    similarFilms.map((movie, i) => (
                        <Film key={i} {...movie}/>
                    ))
                }
            </div>
        </div>
    )
};