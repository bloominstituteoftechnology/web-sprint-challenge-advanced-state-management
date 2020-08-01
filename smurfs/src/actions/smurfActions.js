import axios from 'axios';

export const FETCH_SMURF_DATA = 'FETCH_SMURF_DATA';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';

export const fetchSmurfs = () => (dispatch) => {
    dispatch({type:FETCH_SMURF_DATA})
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log("get request", res.data);
        dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log("error", err);
        dispatch({type: FETCH_SMURF_FAIL, payload: err})
    })
}

export const POST_SMURF_DATA = 'POST_SMURF_DATA';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAIL = 'POST_SMURF_FAIL';

export const postSmurfs = (smurfs) => (dispatch) => {
    dispatch({type: POST_SMURF_DATA})
    axios.post('http://localhost:3333/smurfs', smurfs)
    .then(res => {
        console.log('Post Success?', res.data)
        dispatch({type:POST_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log('error', err);
        dispatch({type:POST_SMURF_FAIL, payload: err})
    })
}
