import React from 'react';
import { connect } from 'react-redux';

import { registerUser, loginUser } from '../store/actions';
import LoginPage from '../components/LoginPage';
import RegisterForm from '../components/RegisterForm';

class LoginView extends React.Component {
  state = {
    user: {
      username: '',
      password: ''
    }
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

  loginNewUser = () => {
    this.props.loginUser(this.state.user)
  }

  render() {
    return (
      <div>
      <LoginPage
        handleChanges={this.handleChanges}
        loginNewUser={this.loginNewUser}
      />
      <button onClick={this.toggleRegister}>Create Account</button>
      {this.state.isRegistering && (
        <RegisterForm
          registerNewUser={this.registerNewUser}
          isRegistering={this.state.isRegistering} />
      )}
      
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isRegistering: state.loginReducer.isRegistering
});

export default connect(
  mapStateToProps,
  { registerUser, loginUser }
)(LoginView);