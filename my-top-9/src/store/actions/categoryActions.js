import axios from 'axios'

export const GET_CATEGORIES_START = 'GET_CATEGORIES_START';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';

export const getCategories = () => dispatch => {
  dispatch({ type: GET_CATEGORIES_START });
  axios
  .get('https://my-top-9.herokuapp.com/api/categories')
  .then(response => {
    console.log('RESPONSE DATA',response.data)
    dispatch({ type: GET_CATEGORIES_SUCCESS, payload: response.data })}
  )
  .catch(error => 
    dispatch({ type: GET_CATEGORIES_FAILURE, payload: error})
  )
}