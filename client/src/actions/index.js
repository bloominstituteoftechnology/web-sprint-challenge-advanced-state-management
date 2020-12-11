import axios from 'axios';
export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAIL = "FETCHING_DATA_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const HANDLE_ERROR = "HANDLE_ERROR";

export const fetchSmurfs = () => dispatch => {
    dispatch({type: FETCHING_DATA_START});
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FETCHING_DATA_FAIL, payload: err.response.message});
        })
};

export const addSmurf = (smurf) => {
    return({ type: ADD_SMURF, payload: smurf});
}

export const handleError = (error) => {
    return({ type: HANDLE_ERROR, payload: error})
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