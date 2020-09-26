import axios from 'axios'

import {
  POST_SMURF_START,
  POST_SMURF,
  POST_SMURF_FAIL
} from './actionTypes'



export const postSmurf = newSmurf => dispatch => {


  dispatch({ type: POST_SMURF_START }) 

    axios
      .post('http://localhost:3333/smurfs', newSmurf)

      .then(response => {
        console.log('postAction.js: POST success: ', response.data)
        dispatch({ type: POST_SMURF, payload: response.data })
      })

      .catch(error => {
        const errorMsg = error.message
        console.log('postAction.js: POST fail: ', errorMsg)
        dispatch({ type: POST_SMURF_FAIL, payload: errorMsg })
      })

  
}