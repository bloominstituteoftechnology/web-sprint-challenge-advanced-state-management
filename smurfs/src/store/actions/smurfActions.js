import axios from 'axios'

export const SMURF_LOADING = 'SMURF_LOADING'
export const SMURF_SUCCESS = 'SMURF_SUCCESS'
export const SMURF_ERROR = 'SMURF_ERROR'

export const getSmurfs = () => (dispatch) => {
    dispatch({type: SMURF_LOADING})
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        dispatch({type: SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({type: SMURF_ERROR, payload: err.message}))
}
export const addSmurf = (smurf) => (dispatch) => {
    console.log(smurf)
    dispatch({type: SMURF_LOADING})
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
        dispatch({type: SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({type: SMURF_ERROR, payload: err.message}))
}