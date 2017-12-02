import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function games(state = initialState.results, action) {
  switch (action.type) {
    case types.LOAD_RESULT_BY_CORRECT_ANSWERS:
      return action.results;
      break;

    default:
      return state;
  }
}
