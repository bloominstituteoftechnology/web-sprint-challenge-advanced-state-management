import axios from 'axios'

import {
  POST_SMURF_START,
  POST_SMURF,
  POST_SMURF_FAIL
} from './actionTypes'



export const postSmurf = newSmurf => dispatch => {


  dispatch({ type: POST_SMURF_START })

  setTimeout(() => {

    axios
      .post('/smurfs', { newSmurf })

      .then(response => {
        console.log('postAction.js: POST success: ', response)
        dispatch({ type: POST_SMURF, payload: response })
      })

      .catch(error => {
        const errorMsg = error.message
        console.log('postAction.js: POST fail: ', errorMsg)
        dispatch({ type: POST_SMURF_FAIL, payload: errorMsg })
      })

  }, 1000)
}