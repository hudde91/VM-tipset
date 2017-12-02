import { combineReducers } from 'redux';
import games from './gamesReducer';
import results from './customerReducer';

const rootReducer = combineReducers({
  games,
  results
});

export default rootReducer;
