import axios from "axios";
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";
//Task List:
//1. Add fetch smurfs action:
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
      .get("/smurfs")
      .then((res) => {
        console.log(res);
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.message });
      });
  };
};

//2. Add add smurf action:
export const addSmurf = (smurf) => {
  console.log(smurf);
  if (!smurf) {
    return {
      type: ADD_SMURF_FAILURE,
    };
  } else {
    return {
      type: ADD_SMURF,
      payload: smurf,
    };
  }
};

export const addSmurfFailure = (message) => {
  return {
    type: FETCH_SMURFS_FAILURE,
    payload: message,
  };
};
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.
