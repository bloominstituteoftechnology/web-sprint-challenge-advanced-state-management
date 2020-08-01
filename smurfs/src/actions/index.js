import axios from 'axios';


export const FETCH_DATA  = 'FETCH_DATA';
export const FETCH_SUCCESS  = 'FETCH_SUCCESS';
export const FETCH_FAILURE  = 'FETCH_FAILURE';


export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: FETCH_DATA })
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('Fetch success', res.data);
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('error', err);
            dispatch({ type: FETCH_FAILURE, payload: err })
        })
}

export const POST_DATA = 'POST_DATA';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const postSmurfs = (smurfs) =>  (dispatch) => {
    dispatch({ type: POST_DATA })
    axios 
        .post('http://localhost:3333/smurfs', smurfs) 
        .then( res => {
            console.log('Post success!', res.data);
            dispatch({ type: POST_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('Error posting!', err);
            dispatch({ type: POST_FAILURE, payload: err })
        })
}