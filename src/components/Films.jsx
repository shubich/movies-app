import React from 'react';
import {Film} from './Film';

export const Films = ({
    films,
    onFilmClick
}) => {

    return (
        <div id='films'>
            <div className='container'>
                {
                    films.map((film, i) => (
                        <Film 
                            key={i} 
                            {...film}
                            onClick={() => onFilmClick(film.id)} 
                        />
                    ))
                }
            </div>
        </div>
    );
}