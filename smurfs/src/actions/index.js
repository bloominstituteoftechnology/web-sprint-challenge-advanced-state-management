import axios from 'axios'

export const SMURF_LOADING = 'SMURF_LOADING'
export const SMURF_SUCCESS = 'SMURF_SUCCESS'
export const SMURF_FAILURE = 'SMURF_FAILURE'
export const ADD_SMURF = 'ADD_SMURF'
  
export const getSmurfs = () => (dispatch) => {
  console.log('im here')
  dispatch({type: SMURF_LOADING})
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data)
      dispatch({ type: SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({ type:SMURF_FAILURE, payload: err.message}))

}
export const addSmurf = (individual) => (dispatch) => {
  dispatch({ type: SMURF_LOADING })
  axios
    .post('http://localhost:3333/smurfs', individual)
    .then(res => {
      dispatch({ type: ADD_SMURF, payload: res.data})
    })
    .catch(err => dispatch({ type: SMURF_FAILURE, payload: err.message}))
}