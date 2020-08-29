import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const LOADING_SMURFS = "LOADING_SMURFS";
export const ERROR_LOADING = "ERROR_LOADING";

export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: LOADING_SMURFS})
    axios.get("http://localhost:3333/smurfs")
    .then(response => {
      // console.log(response)
      dispatch({type: GET_SMURFS, payload: response})
    })
    .catch(error => {
      console.log(error)
      dispatch({type: ERROR_LOADING, payload: error})
    })
  }
};
export const postSmurf = (newSmurf) => {
  return () => {
    axios.post("http://localhost:3333/smurfs", newSmurf)
    .then(response => {
      // console.log(response)
    })
    .catch(error => {
      console.log("new Smurf post error", error)
    })

  }
};
 