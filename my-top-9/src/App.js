import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import LoginView from './views/LoginView';
import HomeView from './views/HomeView';
import './App.css';

class App extends React.Component {

  render() {
    console.log('isLoggedIn', this.props.isLoggedIn)
    return (
      <div className="App">
        <Route path='/Login' render={() => (
          this.props.isLoggedIn ? (
            <Redirect to='/' />
          ) : (
            <LoginView />
          )
        )} />
        <Route exact path='/' render={() => (
          !this.props.isLoggedIn ? (
            <Redirect to='/Login' />
          ) : (
            <HomeView />
          )
        )} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.loginReducer.isLoggedIn
})

export default withRouter(connect(
  mapStateToProps,
  {}
)(App))