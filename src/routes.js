import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import GamesContainer from './components/viewGamePage/GamesContainer'; //eslint-disable-line import/no-named-as-default
import BetContainer from './components/viewBetPage/BetContainer'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/gamecontainer" component={GamesContainer}/>;
    <Route path="/betcontainer" component={BetContainer}/>
  </Route>
);
