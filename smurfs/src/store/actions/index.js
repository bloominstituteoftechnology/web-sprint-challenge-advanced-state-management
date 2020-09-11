import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({type: FETCH_SMURFS_START});

        axios.get("http://localhost:3333/smurfs")
             .then(res => {
                 dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
             })
             .catch(err => console.log(err))
    };
};

export const ADD_SMURF = "ADD_SMURF";

export const addSmurf = smurf => {
    return dispatch => {
        axios.post("http://localhost:3333/smurfs", smurf)
             .then(res => {
                 dispatch({type: ADD_SMURF, payload: res.data})
             })
             .catch(err => console.log(err))
    };
};