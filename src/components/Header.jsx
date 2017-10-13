import React from 'react';
import { Route, Switch } from 'react-router-dom';

export const Header = (props) => (
    <header id='header'>
        <div className='container'>
            {props.children}
        </div>
    </header>
);