import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import LoginView from './views/LoginView';
import HomeView from './views/HomeView';
import './App.css';

class App extends React.Component {
  state = {
    isLoggedIn: false
  }

  componentDidMount() {
    if (!localStorage.getItem('isLoggedIn')) {
      this.setState({ isLoggedIn: false });
    } else {
      this.setState({ isLoggedIn: true });
    }
  }

  render() {
    console.log('props', this.props)
    console.log('state', this.state)
    return (
      <div className="App">
        <Route path='/login' render={() => (
          this.state.isLoggedIn === true ? (
            <Redirect to='/' />
          ) : (
            <LoginView />
          )
        )} />
        <Route exact path='/' render={() => (
          this.state.isLoggedIn === false ? (
            <Redirect to='/login' />
          ) : (
            <HomeView />
          ))} 
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({})

export default withRouter(connect(
  mapStateToProps,
  {}
)(App))