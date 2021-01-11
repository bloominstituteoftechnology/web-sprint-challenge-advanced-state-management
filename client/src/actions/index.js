import axios from 'axios';

const headers = {
    Accept: "application/json"
}

export const fetchSmurf = () => (dispatch) => {
    dispatch({ type: "FETCH_SMURF_START" });

    axios.get("http://localhost:3333/smurfs")
        .then((res) => {
            dispatch({ type: "FETCH_SMURF_SUCCESS", payload: res.data });
        })
        .catch(err => {
            dispatch({ type: "FETCH_SMURF_ERROR", payload: err });
        })
}

export const addSmurf = (smurfs) => (dispatch) => {
    dispatch({ type: "ADD_SMURF_START" });

    axios.get("http://localhost:3333/smurfs")
        .then((res) => {
            dispatch({ type: "ADD_SMURF_SUCCESS", payload: res.data });
        })
        .catch(err => {
            dispatch({ type: "ADD_SMURF_ERROR", payload: err });
        })
}

export const setError = () => (dispatch) => {
    dispatch({ type: "SET_ERROR_START" });

    axios.get("http://localhost:3333/smurfs")
        .then((res) => {
            dispatch({ type: "SET_ERROR_SUCCESS", payload: res.data });
        })
        .catch(err => {
            dispatch({ type: "SET_ERROR_ERROR", payload: err });
        })
}

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