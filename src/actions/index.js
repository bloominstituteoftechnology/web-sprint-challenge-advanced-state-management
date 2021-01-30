import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";

export const fetchSmurfs = () => dispatch => {
    dispatch({type: FETCH_START});
    axios.get('http://localhost:3333/smurfs')
        .then(res=>{
            dispatch({type:FETCH_SUCCESS, payload:res.data});
        })
        .catch(err=>{
            dispatch({type:SET_ERROR, payload:err});
        })
}

export const addSmurf = (smurf) => dispatch => {
    if (smurf.name === '' ||  smurf.nickname === '' || smurf.position === '') {
        dispatch({type:SET_ERROR, payload: "Name, Position and Nickname are required fields."});
        return;
    }

    dispatch({type: FETCH_START});
    axios.post('http://localhost:3333/smurfs', smurf)
        .then(res=> {
            dispatch({type:ADD_SMURF, payload: smurf});
        })
        .catch(err=>{
            dispatch({type:SET_ERROR, payload:err.response.data.Error});
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