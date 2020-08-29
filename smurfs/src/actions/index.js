import axios from "axios";

export const getSmurf = () => (dispatch) => {
  
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res);
      ReactDOM.unstable_renderSubtreeIntoContainer.map((smurfs) => {
        dispatch({ type: "FETCH_SMURFS_SUCCESS", payload: smurfs })
      })
    })
    .catch((err) => {
      console.log(err);
    })
};