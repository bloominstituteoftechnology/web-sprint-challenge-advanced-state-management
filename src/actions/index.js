import axios from 'axios';


export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
export const FETCH_SMURFS_START = "FETCH_SMURF_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURF_FAILURE";

// export const addSmurf = (name, position, nickname, summary) => (dispatch) => {
  export const addSmurf = (name, position, nickname, description) => {
  console.log("action creator addSmurf is fired")
  const newSmurf = {
    name: name,
    position: position,
    nickname: nickname,
    description: description,
  }
  console.log("new smurf:", newSmurf)
  return ({type: ADD_SMURF, payload: newSmurf });
}

export const setErrorMessage = (errorMessage) => {
  console.log("action creator setErrorMessage is fired")

  return {type: SET_ERROR_MESSAGE, payload: errorMessage };
}

export const fetchSmurfs = () => (dispatch) => {
  console.log("action creator fetchSmurfs has fired")
  //1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.

  // update state to loading
  dispatch ({ type: FETCH_SMURFS_START });

  // begin API request
  axios.get(`http://localhost:3333/smurfs`) 

  // respond to happy path & sad path, updating state with API response
    .then(res => {
        console.log("res: ", res);
        // console.log("res.data.species: ", res.data)
        dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log("error: ", err)
        dispatch({ type: FETCH_SMURFS_FAILURE, payload: err });
    })
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

// README: actions/index.js
  /*
  Add in the action creators and action constants needed to add a smurf to state and fetch smurfs from the server. **If at all possible, add in action cases one at a time, instead of all at once. Test your state connects and reducer cases as nessisary.**

  * [ ] Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
  * [ ] Add a standard action that allows us to add new smurf (including the name, nickname, position, summary).
  * [ ] Add a standard action that allows us to set the value of the error message slice of state. */