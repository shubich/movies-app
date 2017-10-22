import React from 'react';
import { Link } from 'react-router-dom';
import { Poster } from './Poster';

export const Person = ({
    person,
    onClick
}) => {
    return (
        <div className='person'>
            <Link to={'/person/'+person.id} onClick={onClick}>
                <Poster path={person.profile_path}/>
            </Link>
            <div className='top-info'>
                <Link className='title' to={'/person/'+person.id} onClick={onClick}>
                    {person.name}
                </Link>            
                {
                    person.popularity
                    ? <span className='popularity'>{person.popularity.toFixed(0)}</span>
                    : null
                }
            </div>
        </div>
    );
} 
   