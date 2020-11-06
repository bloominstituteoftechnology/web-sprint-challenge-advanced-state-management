import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAIL = 'GET_SMURFS_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL';


export const getSmurfs = () => (dispatch) => {
    //Update state and let Redux know we started GET request
    dispatch({ type: GET_SMURFS});
    axios.get('http://localhost:3333/smurfs')
        .then(res => dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_SMURFS_FAIL, payload: `We're sorry... ${err}`}))
}


export const addSmurf = (smurf_object) => (dispatch) => {
    console.log(smurf_object);
    //Update state and let Redux know we started POST request
    dispatch({ type: ADD_SMURF});
    axios.post('http://localhost:3333/smurfs', smurf_object)
        .then(res => dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ADD_SMURF_FAIL, payload: `We're sorry... ${err.message}`}))
}
