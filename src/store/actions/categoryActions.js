import axios from 'axios'

export const GET_CATEGORIES_START = 'GET_CATEGORIES_START';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';
export const DELETE_CATEGORIES_START = 'DELETE_CATEGORIES_START';
export const DELETE_CATEGORIES_SUCCESS = 'DELETE_CATEGORIES_SUCCESS';
export const DELETE_CATEGORIES_FAILURE = 'DELETE_CATEGORIES_FAILURE';

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

export const deleteCategory = (id) => dispatch => {
  dispatch({ type: DELETE_CATEGORIES_START })
  axios
    .delete(`https://my-top-9.herokuapp.com/api/categories/${id}`)
    .then(response => {
      window.location.reload();
      dispatch({ type: DELETE_CATEGORIES_SUCCESS, payload: response.data })
    })
    .catch(error => {
      dispatch({ type: DELETE_CATEGORIES_FAILURE, payload: error })
    })
}