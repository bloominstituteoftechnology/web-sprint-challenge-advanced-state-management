import axios from 'axios';
export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR = 'SET_ERROR';
export const fetchSmurfs = () => dispatch => {
  dispatch({
    type: FETCH_SMURFS_START,
  })
  axios
    .get(`http://localhost:3333/smurfs`)
    .then((res) => {
      dispatch({
        type: FETCH_SMURFS_SUCCESS,
        payload: res.data,
      })
    })
    .catch((error) => {
      alert(error)
    })
}
export const addSmurf = (smurf) => dispatch => {
  if ( smurf.name === '' || smurf.nickname === '' || smurf.description === '' ){
    dispatch({
      type: SET_ERROR, payload: "Name, Position and Nickname r required fields."
    });
    return
  }
  dispatch({
    type: FETCH_SMURFS_START,
  })
  axios
    .post(`http://localhost:3333/smurfs`, smurf)
    .then((res) => {
      dispatch({
        type: ADD_SMURF,
        payload: smurf
      })
    })
}



//ist:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.