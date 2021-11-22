import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application,
// performs an axios call to retreive smurfs from our server, saves the result of that call to our 
//state and shows an error if one is made.

export const FETCH_SMURFS_START = "FETCH_SMURFS_START"
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS"
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
export const FETCH_ADD_SMURFS = "FETCH_ADD_SMURFS"
//3. Add a standard action that allows us to set the value of the error message slice of state.
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR"



export const fetchSmurfs = () =>dispatch =>{
    return dispatch({type: FETCH_SMURFS_START});
    axios
    .get("http://localhost:3333/smurfs")
    .then(res => 
        dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data.results[0]})
        .catch(err=> {
            dispatch({type: FETCH_SMURFS_ERROR})})
            )}

export const addsmurf = (newSmurf)=> {
    return({type:FETCH_ADD_SMURFS, payload:newSmurf});
}

export const fetchSmurfError = (error) => {
    return ({ type: FETCH_SMURFS_ERROR, payload: error })
  }