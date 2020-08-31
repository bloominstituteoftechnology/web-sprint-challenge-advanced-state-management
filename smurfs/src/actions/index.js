import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const FETCH_NEW = "FETCH_NEW";

export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      //console.log(res);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_ERROR,
        payload: error,
      });
    });
};

export const updateSmurfs = (smurfData) => (dispatch) => {
  console.log("YO!", smurfData);
  dispatch({ type: FETCH_NEW });
  axios
    // this sending smurfData to db in post req
    .post("http://localhost:3333/smurfs", smurfData)
    .then((res) => {
      //console.log(res);
      dispatch({ type: UPDATE_SMURFS, payload: res.data });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_ERROR,
        payload: error,
      });
    });
};
