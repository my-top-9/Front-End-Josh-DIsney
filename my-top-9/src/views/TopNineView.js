import React from 'react';
import { connect } from 'react-redux';

import TopNine from '../components/TopNinePage/TopNine';

class TopNineView extends React.Component {

  render() {
    return (
      <div>
        <TopNine />
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps,
  {}
)(TopNineView);