import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';
import * as actions from './actions/gamesActions';
import './styles/styles.css';

const store = configureStore();

store.dispatch(actions.loadResult());
store.dispatch(actions.loadAllGames());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
