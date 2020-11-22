import axios from "axios";

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";

export const fetchData = () => (dispatch) => {
  dispatch({ type: FETCHING_SMURFS_START });

  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log("SV: smurfActions: fetchData: response", res);
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
    })
    .catch((err) => console.log("SV: smurfActions: fetchData: error", err));
};