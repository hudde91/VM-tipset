import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import BetTable from './BetTabel';
import * as gameActions from '../../actions/gamesActions';

export class BetContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      error: '',
      games: Object.assign([], this.props.games),
      game: {
        score: {
          team1: '',
          team2: ''
        }
      }
    };
    this.updateGamesState = this.updateGamesState.bind(this);
    this.saveBettingOnGames = this.saveBettingOnGames.bind(this);
  }

  updateGamesState(event, gameId) {
    /*const field = event.target.name;
    let score = Object.assign({}, this.state.games.score);
    score[field] = event.target.value;
    let game = Object.assign({}, this.state.game);
    game["score"] = score;
    let oldGames = this.state.games;
    let games = [Object.assign({}, ...oldGames, game)];
    return this.setState({games: games});*/
    const games = this.props.games;
    const gameToUpdate = games.findIndex(x => x == gameId);
    const field = event.target.name;
    let score = Object.assign({}, this.state.game.score);
    score[field] = event.target.value;
    games[gameToUpdate] = score;
    return this.setState({games: games});

  }

  saveBettingOnGames(event) {
    event.preventDefault();

    alert("Saving complete!");
    browserHistory.push('/gamecontainer');

  }

  render() {
    return (<BetTable games={this.props.games} updateGamesState={this.updateGamesState} onSave={this.saveBettingOnGames}/>);
  }
}

function mapStateToProps(state) {
  return {games: state.games};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gameActions, dispatch)
  };
}

BetContainer.propTypes = {
  games: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BetContainer);
