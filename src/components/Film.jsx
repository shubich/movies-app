import React from 'react';

export const Film = ({title, year, genre, img}) => (
    <div className='film'>
        <img src={img} alt=""/>
        <div className='top-info'>
            <span className='title'>{title}</span>
            <span className='year'>{year}</span>
        </div>
        <div className='bottom-info'>
            <span className='genre'>{genre}</span>
        </div>
    </div>
);