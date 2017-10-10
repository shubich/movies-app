import React from 'react';
import { Header } from './components/Header';
import { Status } from './components/Status'
import { Films } from './components/Films';
import { Footer } from './components/Footer';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Status />
                <Films />
                <Footer />
            </div>
        )
    }
}