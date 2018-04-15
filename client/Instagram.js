import React, { Component } from 'react'
import { render } from 'react-dom'

// Import CSS
import css from './styles/style.styl'

// Import components
import Main from './components/Main'
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid'


// Import React Router Deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router'



render (<Main />, document.getElementById('root'));

