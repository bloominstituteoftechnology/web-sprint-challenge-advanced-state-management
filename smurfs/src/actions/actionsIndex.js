import axios from 'axios';
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';

export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: FETCH_SMURF_START })
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('from START', res)
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('from FFAIL', err)
            dispatch({ type: FETCH_SMURF_FAIL, payload: err })
        })
}

export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAIL = 'POST_SMURF_FAIL';

export const postSmurfs = (smurf) => (dispatch) => {
    dispatch({ type: POST_SMURF_START })
    axios.post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            console.log('from PSUCCESS', res)
            dispatch({ type: POST_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('from PFAIL', err)
            dispatch({ type: POST_SMURF_FAIL, payload: err })
        })
}
