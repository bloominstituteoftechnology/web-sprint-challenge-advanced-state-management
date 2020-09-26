import axios from 'axios'

import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL
} from './actionTypes'


export const fetchSmurfs = () => dispatch => {

  dispatch({ type: FETCH_DATA_START })

    axios
      .get('http://localhost:3333/smurfs')

      .then(response => {
        const smurfs = response.data;
        console.log('fetchAction.js: axios success: ', response.data)
        dispatch({ type: FETCH_DATA_SUCCESS, payload: smurfs })
      })

      .catch(error => {
        const errorMsg = error.message
        dispatch({ type: FETCH_DATA_FAIL, payload: errorMsg })
      })

  }

