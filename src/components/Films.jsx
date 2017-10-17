import React from 'react';
import { Film } from './Film';
import { NotFound } from './NotFound';

export const Films = ({
    results,
    fetching,
    error,
    onFilmClick
}) => {
    return (
        results.length ?
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
                            film={film}
                            onClick={() => onFilmClick(film.id)} 
                        />
                        :
                        null
                    ))
                }
            </div>
        </div>
        :
        <NotFound />
    );
}