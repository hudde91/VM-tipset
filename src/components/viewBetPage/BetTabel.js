import React, {PropTypes} from 'react';
import BetRow from './BetRow';

class BetTable extends React.Component {

  constructor(props) {
    super(props);
    this.handleUpdatingBetOnGame = this.handleUpdatingBetOnGame.bind(this);
  }

  handleUpdatingBetOnGame(e, id) {
    this.props.updateGamesState(e, id);
  }

  render() {

    const rows = [];

    this.props.games.forEach((game, index) => {
      rows.push(<BetRow key={index} id={index} game={game} handleUpdatingBetOnGame={this.handleUpdatingBetOnGame}/>);
    });

    return (
      <div className="container">
        <h1 className="center">Lagen som möts</h1>
        <form>
          {rows}
          <input className="btn btn-primary float-right" type="submit" onClick={this.props.onSave} value="Spara"/>
        </form>
    </div>);
  }
}

BetTable.propTypes = {
  updateBettingOnGames: PropTypes.func,
  onSave: PropTypes.func,
  games: PropTypes.array.isRequired
};

export default BetTable;
