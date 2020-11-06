import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAIL = 'GET_SMURFS_FAIL';



export const getSmurfs = () => (dispatch) => {
    dispatch({ type: GET_SMURFS});

    axios.get('http://localhost:3333/smurfs')
        .then(res => dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_SMURFS_FAIL, payload: `We're sorry... ${err}`}))
}
