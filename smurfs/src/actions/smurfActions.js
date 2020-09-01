import axios from "axios";

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: "FETCHING_SMURFS_START" });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
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
  dispatch({ type: "POSTING_SMURFS_START" });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => {
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
