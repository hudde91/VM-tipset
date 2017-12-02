import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function games(state = initialState.games, action) {
  switch (action.type) {
    case types.LOAD_ALL_GAME_SUCCESS:
      return action.games;
      break;

    default:
      return state;
  }
}
