import React, {PropTypes} from 'react';
import Input from '../common/Input';

class BetRow extends React.Component {

  render() {
    return (<div className="container">
      <div className="row">
        <span className="col-sm team-column">
          {this.props.game[this.props.id].teamsPlaying.team1}
        </span>
        <span className="col-sm team-column">
          {this.props.game[this.props.id].teamsPlaying.team2}
        </span>
      </div>
      <div className="row">
        <span className="col-sm bet-column">
          {console.log(this.props.game[this.props.id])}
          <Input name="team1" id={this.props.id} onChange={this.props.handleUpdatingBetOnGame} value={this.props.game[this.props.id].teamsPlaying.score.team1}/>
        </span>
        <span className="col-sm bet-column">
          <Input name="team2" id={this.props.id} onChange={this.props.handleUpdatingBetOnGame} value={this.props.game[this.props.id].teamsPlaying.score.team2}/>
        </span>
      </div>
    </div>);
  }
}

BetRow.propTypes = {
  handleUpdatingBetOnGame: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
  id: PropTypes.number
};

export default BetRow;
