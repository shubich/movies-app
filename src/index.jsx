import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import './css/main.less';

const render = () => {
    ReactDom.render(
        <AppContainer>
            <Router>
                <App />
            </Router>
        </AppContainer>,
        document.getElementById('app')
    )
}

render();

if (module.hot) {
    module.hot.accept('./App', render);
}
