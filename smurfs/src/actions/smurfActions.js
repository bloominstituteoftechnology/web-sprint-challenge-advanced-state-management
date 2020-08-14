import axios from 'axios'; 

// declare 
export const SMURF_LOADING = "SMURF_LOADING"; 
export const SMURF_SUCCESS = "SMURF_SUCCESS"; 
export const SMURF_FAILURE = "SMURF_FAILURE"; 

export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: SMURF_LOADING }); 
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: SMURF_FAILURE, payload: err.message}))
}