import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { StoreProvider } from './Store';
import App from './App';
import HomePage from './HomePage';
import FavPage from './FavPage';

import './index.css';

ReactDOM.render(
    <StoreProvider>
        <Router>
            <App path='/'>
                <HomePage path='/'/>
                <FavPage path='/faves'/>
            </App>
        </Router>
    </StoreProvider>,
    document.getElementById('root')
);
