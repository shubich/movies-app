import React from 'react';
import { Link } from 'react-router-dom';
import { imagePrefix } from '../api/'

export const Film = ({
    id, 
    title, 
    release_date, 
    genre, 
    poster_path, 
    onClick
}) => (
    <div className='film' onClick={onClick}>
        <Link to={'/film/'+id}>
            <img src={imagePrefix+poster_path} alt="poster"/>
        </Link>
        <div className='top-info'>
            <span className='title'>
                <Link to={'/film/'+id}>
                    {title}
                </Link>            
            </span>
            <span className='year'>{release_date.split('-')[0]}</span>
        </div>
        <div className='bottom-info'>
            <span className='genre'>{genre}</span>
        </div>
    </div>
);