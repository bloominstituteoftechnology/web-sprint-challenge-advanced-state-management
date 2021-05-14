import axios from 'axios';

export const SMURF_START = "SMURF_START"
export const SMURF_SUCCESS = "SMURF_SUCCESS"

export const SET_ERROR = "SET_ERROR"

export const ADD_SMURF = "ADD_SMURF"

export const fetchSmurfs = () => {
    return (dispatch => {
        dispatch(smurfStart)
        axios.get(`http://localhost:3333/smurfs`)
            .then(res => {
                dispatch(smurfSuccess(res.data))
                console.log(smurfSuccess(res.data))
            })
            .catch(error => {
                dispatch(setError(error))
            })
    })
}


export const smurfStart = () => {
    return({type: SMURF_START})
}

export const smurfSuccess = smurfs => {
    return({type: SMURF_SUCCESS, payload: smurfs})
}

export const setError = error => {
    return({type: SET_ERROR, payload: error})
}


export const addSmurf = (value) => {
    return({type:ADD_SMURF, payload: value})
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.