import axios from "axios";

export const getSmurf = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_SMURFS" });
    axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log('getSmurf res:', res.data);
      res.data.map((smurfs) => {
        dispatch({ type: "FETCH_SMURFS_SUCCESS", payload: smurfs });
      });
    })
    .catch((err) => {
      console.log('error:', err);
    })
  };
};