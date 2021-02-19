import axios from 'axios';

export const FETCH_SMURF_BEGIN = 'FETCH_SMURF_BEGIN'
export const FETCH_SMURF_SUCCEEDED = 'FETCH_SMURF_SUCCEEDED'
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE'
export const ADD_SMURF = 'ADD_SMURF'
export const UPDATE_ERROR = 'UPDATE_ERROR'

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURF_BEGIN })
    axios.get(`http://localhost:3333/smurfs`)
         .then((response) => {
            dispatch({ type: FETCH_SMURF_SUCCEEDED, payload: response.data })
         })
         .catch(error => {
             dispatch({ type: FETCH_SMURF_FAILURE, payload: error.res.data })
         })
}

export const addSmurf = (updateSmurf) => dispatch => {
    axios.post(`http://localhost:3333/smurfs`, updateSmurf)
         .then((response) => {
             dispatch({ type: FETCH_SMURF_SUCCEEDED, payload: response.data })
         })
}

export const updateError = () => dispatch => {
    dispatch({ type: UPDATE_ERROR })
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.