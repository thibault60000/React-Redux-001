import React, { Component } from 'react';
import { render } from 'react-dom';

// Import CSS
import css from './styles/style.styl';

// Import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import React Router Deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Router
const router = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={PhotoGrid} />
    </Route>
    <Route path='/view/:postId' component={Single} />
  </Router>
);

// Render
render(router, document.getElementById('root'));
