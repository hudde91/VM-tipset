import React, {PropTypes} from 'react';
import GameRow from './GameRow';

class GameTable extends React.Component {

  render() {

    const rows = [];

    const sortedResult = this.props.scoreEarnedByCustomers.sort(function(a, b) {
      return b.points - a.points;
    });

    sortedResult.forEach((result, index) => {
      rows.push(<GameRow key={index} place={index + 1} customer={result}/>);
    });

    return (<div className="container">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Namn</th>
            <th>Poäng</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>);
  }
}

GameTable.propTypes = {
  scoreEarnedByCustomers: PropTypes.array.isRequired
};

export default GameTable;
