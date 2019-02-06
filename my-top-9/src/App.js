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
    // if (!localStorage.getItem('isLoggedIn')) {
    //   console.log('no')
    //   this.setState({ isLoggedIn: false });
    // } else {
    //   console.log('yes')
    //   this.setState({ isLoggedIn: true });
    // }
  }

  render() {
    console.log('props isLoggedIn', this.props.isLoggedIn)
    console.log('state isLoggedIn', this.state.isLoggedIn)
    console.log('local storage', localStorage.getItem('isLoggedIn'))
    return (
      <div className="App">
        <Route path='/login' render={() => (
          localStorage.getItem('isloggedIn') === true ? (
            <Redirect to='/' />
          ) : (
            <LoginView />
          )
        )} />
        <Route exact path='/' render={() => (
          localStorage.getItem('isloggedIn') === false ? (
            <Redirect to='/login' />
          ) : (
            <HomeView />
          )
        )} />
          {localStorage.getItem('isloggedIn') === true ? (
            this.props.history.push('/')
          ) : (
            this.props.history.push('/login')
          )}
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