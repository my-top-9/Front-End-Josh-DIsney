import axios from 'axios';

export const ADD_TOPNINE_START = 'ADD_TOPNINE_START';
export const ADD_TOPNINE_SUCCESS = 'ADD_TOPNINE_SUCCESS';
export const ADD_TOPNINE_FAILURE = 'ADD_TOPNINE_FAILURE';

export const addToTopNine = (userId, rankInTop9, newCategoryId) => dispatch => {
  console.log('userId', userId, 'rank', rankInTop9, 'newId', newCategoryId)
  dispatch({ type: ADD_TOPNINE_START })
  axios
    .put(`https://my-top-9.herokuapp.com/api/updateRank/${userId}`, {rankInTop9, newCategoryId})
    .then(response => {
      if (response.status !== 200) {
        console.warn(response)
      }
      return dispatch({ type: ADD_TOPNINE_SUCCESS, payload: response.data })
    })
    .catch(error => {
      return dispatch({ type: ADD_TOPNINE_FAILURE, payload: error})
    })
}