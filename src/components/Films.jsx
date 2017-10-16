import React from 'react';
import {Film} from './Film';

export const Films = ({
    films,
    fetching,
    error,
    onFilmClick
}) => {
    console.log('lol');
    console.log(films);
    return (
        <div id='films'>
            <div className='container'>
                {
                    fetching ?
                    <p>Loading...</p>
                    :
                    films.map((film, i) => (
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