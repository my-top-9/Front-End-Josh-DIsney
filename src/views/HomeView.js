import React from 'react';
import { connect } from 'react-redux';

import HomePage from '../components/HomePage/HomePage';

class HomeView extends React.Component {

  render() {
    return (
      <div>
        <HomePage />
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps,
  {}
)(HomeView)