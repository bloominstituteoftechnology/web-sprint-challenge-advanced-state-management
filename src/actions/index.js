import axios from "axios";

export const FETCHING_API_START = "FETCHING_API_START";
export const FETCHING_API_SUCCESS = "FETCHING_API_SUCCESS";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_ERROR = "ADD_ERROR";

export const fetchSmurfs = (smurf) => (dispatch) => {
  if (smurf.name === "" || smurf.nickname === "" || smurf.position === "") {
    dispatch({
      type: ADD_ERROR,
      payload: "Name, Position and Nickname are REQUIRED ",
    });
    return;
  }

  dispatch({ type: FETCHING_API_START });
  axios
    .get("http://localhost:333/smurfs")
    .then((res) => {
      dispatch({ type: FETCHING_API_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: ADD_ERROR, payload: error });
    });
};

export const addSmurf = (smurf) => (dispatch) => {
  dispatch({ type: FETCHING_API_START });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => {
      dispatch({ type: ADD_SMURF, payload: smurf });
    })
    .catch((error) => {
      dispatch({ type: ADD_ERROR, payload: error.response.data.error });
    });
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
