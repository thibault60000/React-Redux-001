import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the root reducer
import rootReducer from './reducers/index';

// Import datas
import comments from './data/comments';
import posts from './data/posts';

// Create an object for the default data
const defaultState = { 
    posts, 
    comments
};

// Store
const store = createStore(rootReducer, defaultState);

// History
export const history = syncHistoryWithStore(browserHistory, store);

export default store;