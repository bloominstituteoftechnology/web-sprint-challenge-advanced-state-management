import axios from 'axios'

import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL
} from './actionTypes'


export const fetchSmurfs = () => dispatch => {

  dispatch({ type: FETCH_DATA_START })

  setTimeout(() => {

    axios
      .get('/smurfs')

      .then(response => {
        const smurfs = response;
        console.log('fetchAction.js: axios success: ', response)
        dispatch({ type: FETCH_DATA_SUCCESS, payload: smurfs })
      })

      .catch(error => {
        const errorMsg = error.message
        dispatch({ type: FETCH_DATA_FAIL, payload: errorMsg })
      })

  }, 1000)

}