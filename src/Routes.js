import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Manager from './layout/Manager';
import FormCep from './components/FormCep/FormCep';
import Layout from './layout/Layout';


function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Layout} />
            <Route path='/dragonballmanager' component={Manager} />
            <Route path='/formcep' component={FormCep} />
        </BrowserRouter>
    )
}

export default Routes;