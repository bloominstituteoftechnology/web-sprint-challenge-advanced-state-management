
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


import axios from 'axios';



export const SMURF = "FETCH_SMURF";
export const FAIL = "FETCH_FAIL";
export const ADD = "ADD_SMURF";
export const DATA_FAIL = "DATA_FAIL";

export const smurfData = () => dispatch => {
    

    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            dispatch({ type: SMURF, payload: res.data });
        })
        .catch(err => dispatch({ type: FAIL, payload: err }));
}
   
export const addNewSmurf = (smurfData) => dispatch => {
    axios
        .post("http://localhost:3333/smurfs", smurfData)
        .then(res => {
            dispatch({ type: ADD, payload: smurfData });
        })
        .catch(err => dispatch({ type: FAIL, payload: err }));
}

export const setError = (err) => {
    return({ type: DATA_FAIL, payload: err });
}


