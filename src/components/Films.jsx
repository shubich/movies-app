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
        (results.length || fetching) ?
        <div id='films'>
            <div className='container'>
                {
                    fetching ?
                    <p>Loading...</p>
                    :
                    results.map((film, i) => (
                        <Film 
                            key={i} 
                            film={film}
                            onClick={() => onFilmClick(film.id)} 
                        />
                    ))
                }
            </div>
        </div>
        :
        <NotFound />
    );
}