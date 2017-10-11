import React from 'react';
import {Film} from './Film'

const movies = [
    {
        title: 'KILL BILL: VOL. 2',
        year: '2004',
        genre: 'Action & Adventure',
        img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNmFiYmJmN2QtNWQwMi00MzliLThiOWMtZjQxNGRhZTQ1MjgyXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg'
    },
    {
        title: 'KILL BILL: VOL. 1',
        year: '2003',
        genre: 'Action & Adventure',
        img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYTczMGFiOWItMjA3Mi00YTU5LWIwMDgtYTEzNjRkNDkwMTE2XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg'
    },
    {
        title: 'PULP FICTION',
        year: '1994',
        genre: 'Oscar-winning Movies',
        img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY1000_CR0,0,673,1000_AL_.jpg'
    },
    {
        title: 'JACKIE BROWN',
        year: '1997',
        genre: 'Dramas',
        img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNmY5ODRmYTItNWU0Ni00MWE3LTgyYzUtYjZlN2Q5YTcyM2NmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,683,1000_AL_.jpg'
    },
    {
        title: 'RESERVOIR DOGS',
        year: '1992',
        genre: 'Independent Movies',
        img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
    },
    {
        title: 'FOUR ROOMS',
        year: '1995',
        genre: 'Comedies',
        img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDc3Y2YwMjUtYzlkMi00MTljLTg1ZGMtYzUwODljZTI1OTZjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
    }, {
        title: 'Django Unchained',
        year: '2012',
        genre: 'Dramas',
        img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
    }
];

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