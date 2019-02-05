import React from 'react'

export default class LoginPage extends React.Component {
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
          <button onClick={event => {
            event.preventDefault()
            console.log(this.state)
            this.props.loginNewUser(this.state)}} 
            className='loginButton'>
            Submit
          </button>
        </form>
      </div>
    )
  }
}