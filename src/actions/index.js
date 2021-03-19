import axios from 'axios';
import Feedback from 'react-bootstrap/esm/Feedback';
import { bindActionCreators } from 'redux';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR_MESSAGE_SET = 'ERROR_MESSAGE_SET';

export const addSmurf = (name, nickname,position, summary) => {
    return { type: ADD_SMURF, payload:name, nickname, position, summary}
}

export const errorMessageSet = (error) => {
    return {type: ERROR_MESSAGE_SET, payload: error}
}

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({type: FETCH_SMURF_START});

        axios 
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('respons: ',res.data)
            dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FETCH_SMURF_ERROR, payload: err.message})
        });
    };
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.