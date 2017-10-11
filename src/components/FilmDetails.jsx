import React from 'react';

export const FilmDetails = () => (
    <div id='film-details'>
        <div className='poster'>
            <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY1000_CR0,0,673,1000_AL_.jpg" alt=""/>
        </div>
        <div className='info'>
            <h2>
                <span className='title text-primary'>Pulp Fiction</span>
                <span className='rating'>4.1</span>
            </h2>
            <p className='genre text-basic'>Oscar-winning Movies</p>
            <p className='numbers'>
                <span className='release-year'>1994</span>
                <span className='duration'>154 min</span>
            </p>
            <p className='description text-basic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita natus repudiandae quo accusantium. Beatae a dolorem assumenda quo placeat quam, error, perspiciatis velit harum temporibus numquam repudiandae accusamus, fugiat corrupti ipsa consectetur quibusdam unde! A maiores exercitationem adipisci aut dolore.</p>
            <p className='director text-basic'>Director: Quentin Tarantino</p>
            <p className='cast text-basic'>Cast: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi obcaecati assumenda at veritatis rerum, mollitia consectetur provident maiores doloremque non.</p>
        </div>

    </div>
);