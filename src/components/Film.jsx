import React from 'react';
import { Link } from 'react-router-dom';

export const Film = ({id, title, year, genre, img}) => (
    <div className='film'>
        <Link to={'/movie/'+id}>
            <img src={img} alt=""/>
        </Link>
        <div className='top-info'>
            <Link to='/movie'>
                <span className='title'>{title}</span>
            </Link>
            <span className='year'>{year}</span>
        </div>
        <div className='bottom-info'>
            <span className='genre'>{genre}</span>
        </div>
    </div>
);