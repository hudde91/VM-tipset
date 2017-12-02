import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import GameTable from './GameTable';

export class GamesContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (<GameTable scoreEarnedByCustomers={this.props.scoreEarnedByCustomers} />);
  }
}

function mapStateToProps(state) {
  return {
    scoreEarnedByCustomers: state.results
  };
}

GamesContainer.propTypes = {
  scoreEarnedByCustomers: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(GamesContainer);
