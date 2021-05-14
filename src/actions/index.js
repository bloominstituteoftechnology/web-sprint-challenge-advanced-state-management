
import axios from 'axios';
//import { data } from 'msw/lib/types/context';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const ADD_SMURF = "ADD_SMURF";
export const ADD_ERROR_MESSAGE = "ADD_ERROR_MESSAGE";

export const fetchSmurfs = () => (dispatch) => {
    dispatch({type: FETCH_START});
    axios.get('http://localhost:3333/smurfs')
        .then((res => {
            console.log(res.data);
            dispatch({type: FETCH_SUCCESS, payload: res.data})
        }))
        .catch(err => {
            console.log(err);
            dispatch({type: FETCH_FAIL, payload: err})
        });
}

export const addSmurf = ({name, position, nickname, description}) => {
    return {
        type:ADD_SMURF,
        payload: 
            {name,
            position,
            nickname,
            description,
            id: Date.now()}
      
    }
}

export const errorMessageFunction = (message) => {
    return {
        type: ADD_ERROR_MESSAGE,
        payload: message
    }
}
//Task List:
//1.[x] Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. [x]Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3.[x] Add a standard action that allows us to set the value of the error message slice of state.