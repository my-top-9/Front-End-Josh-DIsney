import React from 'react';
import { connect } from 'react-redux';

class TopNine extends React.Component {

  render() {
    return (
      <div>
        <h1>Top Nine Goes Here</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps,
  {}
)(TopNine);