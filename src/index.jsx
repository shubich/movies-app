import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { SearchBar } from './components/SearchBar';
import { FilmDetails } from './components/FilmDetails';
import { Status } from './components/Status'
import { Films } from './components/Films';
import { NotFound } from './components/NotFound';
import { Footer } from './components/Footer';
import './styles/main.less';

const render = () => {
    ReactDom.render(
        <AppContainer>
            <Router>
                <Switch>
                    <Route path='/film/:id'>
                        <App>
                            <Header>
                                <Nav search={true}/>
                                <Route component={FilmDetails}/>
                            </Header>
                            <Route component={Status}/>
                            <Route component={Films}/>
                            <Footer/>
                        </App>
                    </Route>                
                    <Route path='*'>
                        <App>
                            <Header>
                                <Nav search={false}/>
                                <Route component={SearchBar}/>
                            </Header>
                            <Route component={Status}/>
                            <Switch>
                                <Route path='/search/:query' component={Films}/>
                                <Route path='*' component={NotFound}/>
                            </Switch>                            
                            <Footer/>
                        </App>
                    </Route>                
                </Switch>
            </Router>
        </AppContainer>,
        document.getElementById('app')
    )
}

render();

if (module.hot) {
    module.hot.accept('./App', render);
}
