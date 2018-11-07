import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import HomePage from '../views/HomePage';
import PageNotFound from '../views/PageNotFound';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={HomePage} />
        <Route path="**" component={PageNotFound} status={404} />
    </Router>
);
