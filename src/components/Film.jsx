import React from 'react';
import { Link } from 'react-router-dom';
import { imagePrefix } from '../api/';

export const Film = ({
    film,
    onClick
}) => {
    return (
        <div className='film' onClick={onClick}>
            <Link to={'/film/'+film.id}>
            {
                film.poster_path
                    ? <img src={imagePrefix+film.poster_path} alt="poster"/>
                    : <div className='poster-none'><i className="fa fa-film" aria-hidden="true"></i></div>
            }
            </Link>
            <div className='top-info'>
                <span className='title'>
                    <Link to={'/film/'+film.id}>
                        {film.title}
                    </Link>            
                </span>
                <span className='year'>
                    {
                        film.release_date ?
                        film.release_date.split('-')[0]
                        :
                        'unknown'
                    }
                </span>
            </div>
            <div className='bottom-info'>
                {/* <span className='genre'>{film.genre}</span> */}
            </div>
        </div>
    );
} 
   