import React from 'react';
import { connect } from 'react-redux';

class HomeView extends React.Component {

  render() {
    return (
      <div>
        This is the Home View
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.loginReducer.isLoggedIn
})

export default connect(
  mapStateToProps,
  {}
)(HomeView)