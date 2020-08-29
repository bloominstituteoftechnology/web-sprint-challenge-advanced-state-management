import axios from 'axios'

export const getSmurf = () => dispatch => {
    dispatch({ type: FETCH_SMURF_START});
    axios
        .get('http://localhost:3333/smurfs')
        .then(res =>  dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data }))
        .catch(err => dispatch({type: FETCH_SMURF_FAIL, payload: err}))

}

export default getSmurf;

export const FETCH_SMURF_START = "FETCH_SMURF_START"
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS"
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL"