import React from 'react';
import { movies } from '../data';

export const FilmDetails = (props) => {
    const filmId = props.match.params.id;
    const isCurFilm = (film, index, array) => {
        return film.id == filmId
    };
    const curFilm = movies.find(isCurFilm);
    return (
        <div id='film-details'>
            <div className='poster'>
                <img src={curFilm.img} alt=""/>
            </div>
            <div className='info'>
                <h2>
                    <span className='title text-primary'>{curFilm.title}</span>
                    <span className='rating'>4.1</span>
                </h2>
                <p className='genre text-basic'>{curFilm.genre}</p>
                <p className='numbers'>
                    <span className='release-year'>{curFilm.year}</span>
                    <span className='duration'>154 min</span>
                </p>
                <p className='description text-basic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita natus repudiandae quo accusantium. Beatae a dolorem assumenda quo placeat quam, error, perspiciatis velit harum temporibus numquam repudiandae accusamus, fugiat corrupti ipsa consectetur quibusdam unde! A maiores exercitationem adipisci aut dolore.</p>
                <p className='director text-basic'>Director: Quentin Tarantino</p>
                <p className='cast text-basic'>Cast: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi obcaecati assumenda at veritatis rerum, mollitia consectetur provident maiores doloremque non.</p>
            </div>

        </div>
    )
};