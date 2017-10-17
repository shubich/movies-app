import React from 'react';
import {Nav} from './Nav';
import { imagePrefix } from '../api/'

export const FilmDetails = ({
    currentFilm
}) => {
    return (
        <div>
            <div id='film-details'>
                <div className='poster'>
                    <img src={imagePrefix+currentFilm.poster_path} alt="poster"/>
                </div>
                <div className='info'>
                    <h2>
                        <span className='title text-primary'>{currentFilm.title}</span>
                        <span className='rating'>
                            {
                                currentFilm.vote_average < 10 ?
                                currentFilm.vote_average.toFixed(1)
                                :
                                currentFilm.vote_average 
                            }
                        </span>
                    </h2>
                    {/* <p className='genre text-basic'>{currentFilm.genre}</p> */}
                    <p className='numbers'>
                        <span className='release-year'>{currentFilm.release_date}</span>
                        {/* <span className='duration'>154 min</span> */}
                    </p>
                    <p className='description text-basic'>{currentFilm.overview}</p>
                    {/* <p className='director text-basic'>Director: Quentin Tarantino</p>
                    <p className='cast text-basic'>Cast: [...actors]</p> */}
                </div>

            </div>
        </div>
    )
};