import axios from "axios";

export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAILED = 'FETCHING_SMURF_FAILED';

export const SMURF_POST_START = 'FETCHING_SMURF_START';
export const SMURF_POST_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const SMURF_POST_FAILED = 'FETCHING_SMURF_FAILED';

export const getSmurf = () => dispatch => {
    dispatch({type: FETCHING_SMURF_START});

    axios
      .get("http://localhost:3333/smurfs")
      .then(result => {
          console.log(result);
          dispatch({ type: FETCHING_SMURF_SUCCESS, payload: result.data})
      })
      .catch(err => {
          console.log(err);
          dispatch({ type: FETCHING_SMURF_FAILED, payload: err})
      })
      
};

export const Smurfing = smurf => dispatch => {
    dispatch({type: SMURF_POST_START});

    axios.post("http://localhost:3333/smurfs", {
        name:smurf.name,
        age:smurf.age,
        height:smurf.height
    })
      .then(result => {
          console.log(result);
          dispatch({ type: SMURF_POST_SUCCESS, payload: result.data})
      })
      .catch(err => {
          console.log(err);
          dispatch({ type: SMURF_POST_FAILED, payload: err})
      })
      
};