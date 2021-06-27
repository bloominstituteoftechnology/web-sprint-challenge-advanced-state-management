import axios from 'axios';
export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR = 'ERROR';

export const fetchSmurfs =()=>(dispatch)=>{
    dispatch({ type: FETCH_SMURFS_START })
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
        })
        .catch( error=>{
            dispatch({type: FETCH_SMURFS_ERROR, payload: error })
        })
}
export const addSmurf = ({ name, position, nickname, description})=>{
    return{
        type: ADD_SMURF,
        payload: { name, position, nickname, description}
    }
};

export const setErrorMessage = (error) =>{
    return{
        type: ERROR,
        payload: error
    }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.