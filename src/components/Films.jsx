import React from 'react';
import {Film} from './Film';
import { movies } from '../data';

export const Films = () => (
    <div id='films'>
        <div className='container'>
            {
                movies.map((movie, i) => (
                    <Film key={i} {...movie}/>
                ))
            }
        </div>
    </div>
);