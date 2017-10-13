import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Status } from './components/Status'
import { Films } from './components/Films';
import { SimilarFilms } from './components/SimilarFilms';
import { NotFound } from './components/NotFound';
import { Footer } from './components/Footer';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Status />
                <Switch>
                    <Route path='/search' component={Films}/>
                    <Route path='/film/:id' component={SimilarFilms}/>
                    <Route path='*' component={NotFound}/>
                </Switch>
                <Footer />
            </div>
        )
    }
}