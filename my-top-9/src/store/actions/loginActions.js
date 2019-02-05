import axios from 'axios';

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';
export const USER_LOGIN_START = 'USER_LOGIN_START';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_LOGOUT_START = 'USER_LOGOUT_START';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';

export const registerUser = user => dispatch => {
  dispatch({ type: REGISTER_USER_START });
  axios
    .post('http://localhost:5000/api/register', user)
    .then(response => {
      console.log('response',response)
      return dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data })
      }
      )
    .catch(error =>
      dispatch({ type: REGISTER_USER_FAILURE, payload: error})
    )
}

export const loginUser = user => dispatch => {
  console.log('USER', user)
  dispatch({ type: USER_LOGIN_START });
  axios
    .post('http://localhost:5000/api/login', user)
    .then(response => {
      console.log('RESPONSE DATA',response.data)
      localStorage.setItem('isLoggedIn', true)
      dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data })}
      )
    .catch(error =>
      dispatch({ type: USER_LOGIN_FAILURE, payload: error})
    )
}

export const logoutUser = () => dispatch => {
  dispatch({ type: USER_LOGOUT_START });
  axios
    .get('http://localhost:5000/api/logout')
    .then(response => {
      dispatch({ type: USER_LOGOUT_SUCCESS, payload: response.data })}
    )
    .catch(error => 
      dispatch({ type: USER_LOGOUT_FAILURE, payload: error})
    )
}