import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ADD_SMURFS = "ADD_SMURFS";

export const fetchData = () => (dispatch) => {
    dispatch({type : FETCH_DATA});

    axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
        dispatch({
            type: FETCH_SUCCESS,
            payload: res.data

        })
    })
    .catch((err) => {
        console.log(err);
    })
}

export const addSmurf = (form) => (dispatch) => {
        axios
    .post("http://localhost:3333/smurfs", form)
    .then((res) => {
        dispatch({
            type: ADD_SMURFS,
            payload: res.data
        })
    })
    .catch((err) => {
        console.log(err);
    })
    
}