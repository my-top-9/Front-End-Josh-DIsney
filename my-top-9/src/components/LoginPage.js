import React from 'react'

export default class LoginPage extends React.Component {
  state = {
    username: '',
    password: ''
  }

  render() {
    return (
      <div className='loginFormContainer'>
        <h1>this is the login form</h1>
        <form className='loginForm'>
          <input 
            className='loginInput'
            type='text'
            name='username'
            placeholder='username...'
            value={this.state.username}
            onChange={this.handleChanges}
          />
          <input 
            className='loginInput'
            type='text'
            name='password'
            placeholder='password...'
            value={this.state.password}
            onChange={this.handleChanges}
          />
          <button onClick={event => this.props.loginNewUser(event, this.state)}
          className='loginButton'>
            Submit
          </button>
        </form>
      </div>
    )
  }
}