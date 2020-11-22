import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_ERROR = "ADD_SMURF_ERROR";

const apiURL = "http://localhost:3333/smurfs";

export const loadSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_DATA_START });
  setTimeout(() => {
    axios
      .get(apiURL)
      .then((res) => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_DATA_ERROR, payload: `Error fetching data: ${err.message}` });
      });
  }, 1500);
};

export const addSmurf = (smurf) => (dispatch) => {
  axios
    .post(apiURL, smurf)
    .then((res) => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_SMURF_ERROR, payload: `Error fetching data: ${err.message}`});
    });
};
