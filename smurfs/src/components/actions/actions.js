import axios from 'axios';

export const SMURFS_LOADING = 'SMURFS_LOADING';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const SMURFS_FAIL = 'FETCH_SMURFS_FAIL';
export const CLEAR_SMURFS = 'CLEAR_SMURFS';

export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: SMURFS_LOADING })
    axios
        .get('http://localhost:3333/smurfs')
        .then(res =>
            dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
        )
        .catch(err =>
            dispatch({type: SMURFS_FAIL, payload: err})
        )
}

export const addSmurf = (smurf) => (dispatch) => {
    dispatch({ type: SMURFS_LOADING })
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => 
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
        )
        .catch(err => 
            dispatch({ type: SMURFS_FAIL, payload: err })
        )
}