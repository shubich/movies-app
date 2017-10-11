import React from 'react';

export const Status = () => (
    <div id='status'>
        <div className='container'>
            <div className='count'>7 movies found</div>
            <div className='sort'>
                <span>Sort by</span>
                <a href="#" className='link link-default'>release date</a>
                <a href="#" className='link link-primary'>rating</a>
            </div>
        </div>
    </div>
);