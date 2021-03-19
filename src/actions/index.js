import axios from 'axios';

export const FETCH_BEGINS = "FETCH_BEGIN";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const SET_ERROR = "SET_ERROR"
export const ADD_SMURF = "ADD_SMURF"

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_BEGINS });
        axios
            .get(`http://localhost:3333/smurfs`)
            .then((res) => {
                console.log(res.data);
                dispatch({ type: FETCH_SUCCESS, payload: res.data});
            })
            .catch((err) => {
                dispatch({ type: FETCH_FAIL, payload: err.message });
            });
    };
};

export const addSmurf = (smurf) => dispatch => {
    axios.post('http://localhost:3333/smurfs', smurf)
    .then((res) => {
        dispatch({ type: FETCH_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: FETCH_FAIL, payload: err.response.data });
    });
}

export const setError = () => dispatch => {
    dispatch({ type: SET_ERROR });
}