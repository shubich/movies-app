import React from 'react';
import { Link } from 'react-router-dom';

export const Film = ({id, title, year, genre, img}) => (
    <div className='film'>
        <Link to={'/film/'+id}>
            <img src={img} alt=""/>
        </Link>
        <div className='top-info'>
            <span className='title'>
                <Link to={'/film/'+id}>
                    {title}
                </Link>            
            </span>
            <span className='year'>{year}</span>
        </div>
        <div className='bottom-info'>
            <span className='genre'>{genre}</span>
        </div>
    </div>
);