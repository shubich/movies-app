import React from 'react';
import { Item } from './components/Item';
import { Dropdown } from './components/Dropdown';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Item />
                <Dropdown />
            </div>
        )
    }
}