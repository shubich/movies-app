import React from 'react';
import {Film} from './Film';

export const Films = ({
    results,
    fetching,
    error,
    onFilmClick
}) => {
    return (
        <div id='films'>
            <div className='container'>
                {
                    fetching ?
                    <p>Loading...</p>
                    :
                    results.map((film, i) => (
                        film.poster_path ?
                        <Film 
                            key={i} 
                            {...film}
                            onClick={() => onFilmClick(film.id)} 
                        />
                        :
                        null
                    ))
                }
            </div>
        </div>
    );
}