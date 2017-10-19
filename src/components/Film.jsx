import React from 'react';
import { Link } from 'react-router-dom';
import { imagePrefix } from '../api/';

export const Film = ({
    film,
    onClick
}) => {
    return (
        <div className='film'>
            <Link to={'/film/'+film.id} onClick={onClick}>
            {
                film.poster_path
                    ? <img src={imagePrefix+film.poster_path} alt="poster"/>
                    : <div className='poster-none'><i className="fa fa-film" aria-hidden="true"></i></div>
            }
            </Link>
            <div className='top-info'>
                <Link className='title' to={'/film/'+film.id} onClick={onClick}>
                    {film.title}
                </Link>            
                {
                    film.release_date
                    ? <span className='year'>{film.release_date.split('-')[0]}</span>
                    : null
                }
            </div>
            <div className='bottom-info'>
                {/* <span className='genre'>{film.genre}</span> */}
            </div>
        </div>
    );
} 
   