import axios from 'axios';

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR = 'ERROR';

const headers = { 
    Accept: 'Application/json'
}

export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: "FETCH_SMURF_START" });

    axios.get("http://localhost:3333/smurfs", { headers: headers})
        .then((res) => {
            dispatch({ type: "FETCH_SMURF_SUCCESS", payload: res.data });
            console.log(res);
        })
        .catch(err => {
            dispatch({ type: "FETCH_SMURF_ERROR", payload: err });
            console.log(err);
        })
}

export const addSmurf = (newSmurf) => (dispatch) => {
    dispatch({ type: "ADD_SMURF", payload: newSmurf });


export const setError = (err) =>  (dispatch) => {
    return ({ type: "SET_ERROR", payload: err });
}

export default fetchSmurfs;

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.