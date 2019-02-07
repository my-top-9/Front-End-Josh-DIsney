import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter, NavLink } from 'react-router-dom';

import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import CategoriesView from './views/CategoriesView';
import TopNineView from './views/TopNineView';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { logoutUser } from './store/actions';
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

  logoutNewUser = () => {
    localStorage.removeItem('username');
    this.props.history.push('/login')
    this.props.logoutUser()
  }

  render() {
    console.log('props', this.props)
    console.log('state', this.state)
    return (
      <div className="App">
        {this.state.isLoggedIn && 
          <nav>
            <NavLink to='/'>Home</NavLink>
            <button onClick={this.logoutNewUser}>LOG OUT</button>
          </nav>
        }
        {/* <ProtectedRoute path='/login' component={LoginView}
          isLoggedIn={!this.state.isLoggedIn}
        /> */}
        <Route path='/login' render={() => (
          this.state.isLoggedIn === true ? (
            <Redirect to='/' />
          ) : (
            <LoginView />
          )
        )} />
        <ProtectedRoute exact='true' path='/' component={HomeView}
          isLoggedIn={this.state.isLoggedIn} />
        {/* <Route exact path='/' render={() => (
          this.state.isLoggedIn === false ? (
            <Redirect to='/login' />
          ) : (
            <HomeView />
          ))} 
        /> */}
        <ProtectedRoute path='/categories' component={CategoriesView}
          isLoggedIn={this.state.isLoggedIn} />
        <ProtectedRoute path='/my-top-9' component={TopNineView}
          isLoggedIn={this.state.isLoggedIn} />
      </div>
    );
  }
}

const mapStateToProps = state => ({})

export default withRouter(connect(
  mapStateToProps,
  { logoutUser }
)(App))