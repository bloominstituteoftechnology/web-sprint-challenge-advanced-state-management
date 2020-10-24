import axios from 'axios'; 

export const FETCHING_SMURFS_START = "FETCH_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";

export const getSmurfs = () => dispatch => {
    dispatch({type: FETCHING_SMURFS_START});

    axios
        .get("http://localhost:3333/smurfs")
        .then((res) => {
            dispatch({ 
                type: FETCHING_SMURFS_SUCCESS, payload: res.data});
            console.log(res.data)
        })
        .catch((err) => {
            dispatch({
                type: FETCHING_SMURFS_FAILURE,
                payload: err
            });
            console.log(err);
        });
};
