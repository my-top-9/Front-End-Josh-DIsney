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
export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const getUser = userId => dispatch => {
  dispatch({ type: GET_USER_START })
  axios
    .get(`https://my-top-9.herokuapp.com/api/users/${userId}`)
    .then(response => {
      console.log('getUserResponse', response.data)
      dispatch({ type: GET_USER_SUCCESS, payload: response.data[10].id })
    })
    .catch(error => {
      dispatch({ type: GET_USER_FAILURE, payload: error })
    })
}

export const registerUser = user => dispatch => {
  dispatch({ type: REGISTER_USER_START });
  axios
    .post('https://my-top-9.herokuapp.com/api/register', user)
    .then(response => {
      return dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data })
    })
    .catch(error =>
      dispatch({ type: REGISTER_USER_FAILURE, payload: error })
    )
}

export const loginUser = (user) => dispatch => {
  dispatch({ type: USER_LOGIN_START });
  axios
    .post('https://my-top-9.herokuapp.com/api/login', user)
    .then(response => {
      localStorage.setItem('user', response.data.user.id);
      localStorage.setItem('isLoggedIn', true)
      window.location.reload();
      dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data.user })
    })
    .catch(error =>
      dispatch({ type: USER_LOGIN_FAILURE, payload: error })
    )
}

export const logoutUser = () => dispatch => {
  dispatch({ type: USER_LOGOUT_START });
  axios
    .get('https://my-top-9.herokuapp.com/api/logout')
    .then(response => {
      localStorage.removeItem('isLoggedIn')
      window.location.reload();
      dispatch({ type: USER_LOGOUT_SUCCESS, payload: response.data })}
    )
    .catch(error => 
      dispatch({ type: USER_LOGOUT_FAILURE, payload: error })
    )
}