import axios from 'axios';



export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';


export const fetchSmurfData = () => dispatch => {
    dispatch({type: FETCH_SMURF_START });
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
        console.log('Here is the res from Fetch', res.data)
        dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data} )
    })
    .catch(err => {
        dispatch({type: FETCH_SMURF_FAILURE, payload: err.data})
        console.log(err.data)
    })
}

