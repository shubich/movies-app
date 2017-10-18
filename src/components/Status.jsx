import React from 'react';

export const Status = (props) => {
    return (
        <div id='status'>
            {
                (props.count && props.match.url !== '/') ?
                <div className='container'>
                    <div className='count'>{props.count} movies found</div>
                    <div className='sort'>
                        <span className='sortBy'>Sort by</span>
                        <a 
                            onClick={()=>props.handleSort('date')}
                            className={'link link-'+(props.sort == 'date' ? 'primary' : 'default')}
                        >
                            release date
                        </a>
                        <a 
                            onClick={()=>props.handleSort('rating')}
                            className={'link link-'+(props.sort == 'rating' ? 'primary' : 'default')}
                        >
                            rating
                        </a>
                    </div>
                </div>
                :
                null
            }
        </div>
    )
};