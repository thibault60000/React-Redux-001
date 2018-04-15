import React, { Component } from 'react';
import { render } from 'react-dom';

// Import CSS
import css from './styles/style.styl';

// Import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import React Router Deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Import Provider
import { Provider } from 'react-redux';

// Import Store, History
import store, { history } from './store';

// Router
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
      </Route>
      <Route path='/view/:postId' component={Single} />
    </Router>
  </Provider>
);

// Render
render(router, document.getElementById('root'));
