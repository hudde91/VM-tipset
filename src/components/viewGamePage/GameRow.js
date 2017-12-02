import React, {PropTypes} from 'react';

class GameRow extends React.Component {

  render() {

    return (
      <tr>
        <td>{this.props.place}</td>
        <td>{this.props.customer.name}</td>
        <td>{this.props.customer.points}</td>
      </tr>
    );
  }
}

GameRow.propTypes = {
  place: PropTypes.number.isRequired,
  customer: PropTypes.object.isRequired
};

export default GameRow;
