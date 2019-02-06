import React from 'react';
import { connect } from 'react-redux';

import { logoutUser } from '../store/actions';
import HomePage from '../components/HomePage/HomePage';

class HomeView extends React.Component {

  logoutNewUser = () => {
    this.props.logoutUser()
  }

  render() {
    return (
      <div>
        <HomePage
          logoutNewUser={this.logoutNewUser}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.loginReducer.isLoggedIn
})

export default connect(
  mapStateToProps,
  { logoutUser }
)(HomeView)