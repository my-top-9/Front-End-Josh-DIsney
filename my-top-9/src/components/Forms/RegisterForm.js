import React from 'react';
import { connect } from 'react-redux';

class RegisterForm extends React.Component {

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
            value={this.props.user.username}
            onChange={this.props.handleChanges}
          />
          <input 
            className='registerInput'
            type='text'
            name='password'
            placeholder='password...'
            value={this.props.user.password}
            onChange={this.props.handleChanges}
          />
          <button onClick={event => {
            event.preventDefault();
            this.props.registerNewUser(event, this.state)}}
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