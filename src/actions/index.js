import axios from 'axios';

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

export const GET_SMURFS_START = 'GET_SMURFS_START' 
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_FAIL = 'GET_SMURFS_FAIL'

export const ADD_SMURFS_START = 'ADD_SMURFS_START'
export const ADD_SMURFS_SUCCESS = 'ADD_SMURFS_SUCCESS'
export const ADD_SMURFS_FAIL = 'ADD_SMURFS_FAIL'

export const ADD_ERROR = 'ADD_ERROR'

export const addSmurf = (name, nickname, position, description) => (dispatch) => {
    if (name == "" || nickname == "" || position == "") {
        dispatch({type: ADD_SMURFS_FAIL, payload: "name, nickname, and postion required"})
    }
    else {
        dispatch({type: ADD_SMURFS_START})
        axios.post("http://localhost:3333/smurfs", {name, nickname, position, description})
            .then(res => dispatch({type: ADD_SMURFS_SUCCESS, payload: res.data}))
            .catch(err => dispatch({type: ADD_SMURFS_FAIL, payload: err.message}))
    }
}

export const addError = (error) => dispatch => {
    dispatch({type: ADD_ERROR, payload: error})
}

export const getSmurfs = () => dispatch => {
    dispatch({type: GET_SMURFS_START})
    axios.get("http://localhost:3333/smurfs")
        .then(res => dispatch({type: GET_SMURFS_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: GET_SMURFS_FAIL, payload: err.message}))
}