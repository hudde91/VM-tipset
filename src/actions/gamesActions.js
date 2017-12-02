import mockGamesApi from '../api/mockGamesApi';
import * as types from './actionTypes';

export function loadAllGamesSuccess(games) {
  return {type: types.LOAD_ALL_GAME_SUCCESS, games};
}

export function loadResultByCorrectAnswersSuccess(results) {
  return {type: types.LOAD_RESULT_BY_CORRECT_ANSWERS, results};
}

export function loadResult() {
  return dispatch => {
    return mockGamesApi.getScoreFromCorrectResult().then(results => {
      dispatch(loadResultByCorrectAnswersSuccess(results));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadAllGames() {
  return dispatch => {
    return mockGamesApi.getAllGames().then(games => {
      dispatch(loadAllGamesSuccess(games));
    }).catch(error => {
      throw(error);
    });
  };
}
