import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter, NavLink } from 'react-router-dom';

import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import CategoriesView from './views/CategoriesView';
import TopNineView from './views/TopNineView';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { logoutUser, getUser } from './store/actions';
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
    const user = localStorage.getItem('user')
    this.props.getUser(user)
  }

  logoutNewUser = () => {
    localStorage.removeItem('username');
    this.props.history.push('/login')
    this.props.logoutUser()
  }

  render() {
    console.log('app props', this.props)
    console.log('app state', this.state)
    return (
      <div className="App">
        {this.state.isLoggedIn && 
          <nav>
            <NavLink to='/'>Home</NavLink>
            <button onClick={this.logoutNewUser}>LOG OUT</button>
          </nav>
        }
        <Route path='/login' render={ () => (
          this.state.isLoggedIn === true ? (
            <Redirect to='/' />
          ) : (
            <LoginView />
          )
        )} />
        <ProtectedRoute exact='true' path='/' component={HomeView}
          isLoggedIn={this.state.isLoggedIn} />
        <ProtectedRoute path='/categories' component={CategoriesView}
          isLoggedIn={this.state.isLoggedIn} />
        <ProtectedRoute path='/my-top-9' component={TopNineView}
          isLoggedIn={this.state.isLoggedIn} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
  user: state.loginReducer.user
})}

export default withRouter(connect(
  mapStateToProps,
  { logoutUser, getUser }
)(App))