import React from 'react';
import { connect } from 'react-redux';

class RegisterForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChanges = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className='registerFormContainer'>
        <h1>This is the registration form</h1>
        <form className='registerForm'>
          <input 
            className='registerInput'
            type='text'
            name='username'
            placeholder='username...'
            value={this.state.username}
            onChange={this.handleChanges}
          />
          <input 
            className='registerInput'
            type='text'
            name='password'
            placeholder='password...'
            value={this.state.password}
            onChange={this.handleChanges}
          />
          <button onClick={event => this.props.registerNewUser(event, this.state)}
          className='registerButton'>
            Submit
          </button>
        </form>
      </div>
      
    )
  }
}

const mapStatetoProps = state => ({})

export default connect(
  mapStatetoProps,
  {}
)(RegisterForm);