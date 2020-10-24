import axios from 'axios';
export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const SMURF_FAILURE = "SMURF_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const DELETE_SUCCESS = "DELETE_SUCCESS";



export const getSmurf = () => dispatch => {

  dispatch({type: FETCHING_SMURFS_START});
  axios.get("http://localhost:3333/smurfs")
  .then(res => {
      console.log(res);
      dispatch({type: FETCHING_SMURF_SUCCESS, payload: res.data})
  })
  .catch(err => {
      console.log(err);
      dispatch({type: SMURF_FAILURE, payload: 'Uh-oh, Gargemel found the smurfs!!', err});
  });
};

export const addSmurf = newSmurf => dispatch => {
  axios
  .post("http://localhost:3333/smurfs", newSmurf)
  .then(res => {
    console.log(res);
    dispatch({type: ADD_SMURF, payload: newSmurf})
  })
  .catch(err => {
    console.log(err);
    dispatch({type: SMURF_FAILURE, payload: "Uh-oh, your smurf got caught by Gargemel!", err});
  });
}

export const removeSmurf = id => dispatch => {
  axios
  .delete(`http://localhost:3333/smurfs/${id}`)
  .then(res => {
    dispatch({type: DELETE_SUCCESS})
  })
  .catch(err => {
    dispatch({type: SMURF_FAILURE, payload: "Nothing to see here", err});
  })
}
