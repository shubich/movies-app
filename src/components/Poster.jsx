import React from 'react';
import { imagePrefix } from '../api/';

export const Poster = ({
    path
}) => {
    return (
        <div className='poster'>
            {
                path
                    ? <img src={imagePrefix+path} alt="poster"/>
                    : <div className='poster-none'><i className="fa fa-film" aria-hidden="true"></i></div>
            }
        </div>
    );
} 
   