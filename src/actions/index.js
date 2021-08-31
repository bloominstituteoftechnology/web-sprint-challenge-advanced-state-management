import axios from 'axios';

export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';

export const fetchSmurfs = () => (dispatch) => {
    dispatch({type: LOADING})
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log('testing console log', res);
        dispatch({type: SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log({err});
    dispatch({type: ERROR, payload: err.response.data.message})
    });
};

// add your standard action here (line 67 in readme)
export const addSmurf = (newSmurf) => {
    return{type: ADD_SMURF, payload: newSmurf}
}
// now adding action for the ERROR_MESSAGE created in  reducer form
export const errorMessage = (newErrorMessage) => {
    return{type: ERROR_MESSAGE, payload: newErrorMessage}
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.

//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)

//3. Add a standard action that allows us to set the value of the error message slice of state.