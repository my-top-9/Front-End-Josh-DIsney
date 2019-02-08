import React from 'react';
import { connect } from 'react-redux';

import { registerUser, loginUser } from '../store/actions'
import LoginPage from '../components/Forms/LoginPage';
import RegisterForm from '../components/Forms/RegisterForm';

import '../components/Forms/Forms.css';

class LoginView extends React.Component {
  state = {
    user: {
      username: '',
      password: ''
    },
  }

  handleChanges = event => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    })
  }

  toggleRegister = () => {
    this.setState({isRegistering: !this.state.isRegistering})
  }

  registerNewUser = () => {
    this.props.registerUser(this.state.user)
  }

  loginNewUser = (user) => {
    this.props.loginUser(user)
  }

  render() {
    return (
      <div>
        <LoginPage
          handleChanges={this.handleChanges}
          loginNewUser={this.loginNewUser}
        />
        <p className='createSlogan'>No Accout?  No Problem.  Create one here!</p>
        <a href='#scroll-section-two'><button className='createButton' onClick={this.toggleRegister}>{this.state.isRegistering ? 'cancel' : 'Create Account'}</button></a>
        {this.state.isRegistering && (
          <div>
            <RegisterForm
              user={this.state.user}
              handleChanges={this.handleChanges}
              registerNewUser={this.registerNewUser}
              isRegistering={this.state.isRegistering} 
            />
            <a href='#scroll-section-one'><button className='backToLogin'>Return to login</button></a>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isRegistering: state.loginReducer.isRegistering,
  isLoggedIn: state.loginReducer.isLoggedIn
});

export default connect(
  mapStateToProps,
  { registerUser, loginUser }
)(LoginView);