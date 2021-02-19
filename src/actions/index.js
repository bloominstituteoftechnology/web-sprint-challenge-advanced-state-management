import axios from 'axios';

export const FETCH_SMURFS_START = "FETCH__SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";
export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";


export const fetchSmurfs = () =>(dispatch) =>{
    dispatch({type:FETCH_SMURFS_START})
    console.log(FETCH_SMURFS_START)
    axios.get('http://localhost:3333/smurfs')
    .then((response)=>{
        console.log(response)
        dispatch({type:FETCH_SMURFS_SUCCESS, payload:response.data})
    })
    .catch((err)=>{
        console.log(err)
        dispatch({FETCH_SMURFS_FAILURE, payload:err.message})
    })

}

export const addSmurf = (input) => {
    return ({type:ADD_SMURF_SUCCESS, payload:input})
    

}
export const errorSmurf = (error) =>{
    return({type:ADD_SMURF_FAILURE, payload:error})
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.