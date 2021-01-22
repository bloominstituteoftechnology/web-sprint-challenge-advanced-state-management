import axios from "axios";

export const FETCHING_SMURF_START = "FETCHING_SMURF START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_ERROR = "FETCHING_DATA_ERROR";

export const NEW_SMURF_START = "NEW_SMURF_START";
export const NEW_SMURF_SUCCESS = "NEW_SMURF_SUCCESS";
export const NEW_SMURF_ERROR = "NEW_SMURF_ERROR";

export const getSmurf = () => (dispatch) => {
  console.log("This is the getSmurf info");
  dispatch({ type: "FETCHING_SMURF_START" });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
      console.log("The Response for Smurf Data is :", res);
    })
    .catch((err) => {
      dispatch({
        type: FETCHING_SMURF_ERROR,
        payload: `${err.response.status} ${err.response.data}`,
      });
      console.log("The Error is :", err);
    });
};

export const postNewSmurf = (smurf) => (dispatch) => {
  console.log("This is the postNewSmurf info");
  dispatch({ type: "NEW_SMURF_START" });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => {
      dispatch({ type: NEW_SMURF_SUCCESS, payload: res.data });
      console.log("The Response for New Smurf Data Added is:", res);
    })
    .catch((err) => {
      dispatch({
        type: NEW_SMURF_ERROR,
        payload: `${err.response.status} ${err.response.data}`,
      });
      console.log("The Error is:", err);
    });
};

//Task List:
//1. Add fetch smurfs action:
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.
