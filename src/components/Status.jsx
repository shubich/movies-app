import React from 'react';

export const Status = (props) => {
    return (
        <div id='status'>
            {
                (props.count && props.match.url !== '/') ?
                <div className='container'>
                    <div className='count'>{props.count} {props.searchType == 'title' ? 'movies' : 'people'} found</div>
                    {
                        props.searchType == 'title' ?
                        <div className='sort'>
                            <span className='sortBy'>Sort by</span>
                            {
                                props.sortType === 'date'
                                    ? <span className='link link-primary'>release date</span>
                                    : <a onClick={()=>props.handleSort('date')} className='link link-default'>release date</a>
                            }

                            {
                                props.sortType === 'rating'
                                    ? <span className='link link-primary'>rating</span>
                                    : <a onClick={()=>props.handleSort('rating')} className='link link-default'>rating</a>
                            }
                        </div>
                        :
                        null
                    }

                </div>
                :
                null
            }
        </div>
    )
};