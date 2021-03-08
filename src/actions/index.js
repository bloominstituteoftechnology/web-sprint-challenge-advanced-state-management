import axios from 'axios';

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";

export const fetchSmurfs = dispatch => {
    dispatch({ type: FETCHING_SMURFS_START })

    axios.get('../mocks/server')
        .then(res => 
            dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data }))
        .catch(err => 
            dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err }))
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.