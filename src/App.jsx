import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/index.less';

export default class App extends React.Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}