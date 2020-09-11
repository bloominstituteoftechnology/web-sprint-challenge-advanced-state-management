import axios from 'axios';

export const LOADING_SMURFS = 'LOADING_SMURFS';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const POSTING_SMURF = 'POSTING_SMURF';
export const ERROR_SMURFS = 'ERROR_SMURFS';

export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: LOADING_SMURFS })
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: FETCHING_SMURFS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: ERROR_SMURFS, payload: err })
        })
};

export const postSmurf = (smurf) => (dispatch) => {
    dispatch({ type: LOADING_SMURFS })
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            dispatch({ type: POSTING_SMURF, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: ERROR_SMURFS, payload: err })
        })
};