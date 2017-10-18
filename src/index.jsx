import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store/configureStore';
import App from './App';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import SearchBar from './containers/SearchBar';
import FilmDetailsContainer from './containers/FilmDetailsContainer';
import StatusContainer from './containers/StatusContainer'
import FilmsContainer from './containers/FilmsContainer';
import { NotFound } from './components/NotFound';
import { Footer } from './components/Footer';

const render = () => {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path='/film/:id'>
                            <App>
                                <Header>
                                    <Nav search={true}/>
                                    <Route component={FilmDetailsContainer}/>
                                </Header>
                                <Route component={StatusContainer}/>
                                <Route component={FilmsContainer}/>
                                <Footer/>
                            </App>
                        </Route>                
                        <Route path='*'>
                            <App>
                                <Header>
                                    <Nav search={false}/>
                                    <Route component={SearchBar}/>
                                </Header>
                                <Route component={StatusContainer}/>
                                <Switch>
                                    <Route path='/search/:query' component={FilmsContainer}/>
                                    <Route path='*' component={NotFound}/>
                                </Switch>                            
                                <Footer/>
                            </App>
                        </Route>                
                    </Switch>
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}

render();

if (module.hot) {
    module.hot.accept('./App', render);
}
