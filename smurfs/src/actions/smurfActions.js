import axios from "axios";

export const getSmurfs = () => (dispatch) => {
  console.log(`getSmurfs() action`);
  dispatch({ type: "FETCHING_SMURFS_START" });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res);
      dispatch({ type: "FETCHING_SMURFS_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.error(err);
      dispatch({
        type: "FETCHING_SMURFS_ERROR",
        payload: "We couldn't get smurfs at this time.",
      });
    });
};

export const postSmurf = (smurf) => (dispatch) => {
  console.log(`postSmurf() action: ${smurf}`);
  dispatch({ type: "POSTING_SMURFS_START" });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => {
      console.log(res);
      dispatch({ type: "POSTING_SMURFS_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: "POSTING_SMURFS_ERROR",
        payload: "We couldn't add a new smurf at this time.",
      });
    });
};
