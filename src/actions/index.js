import axios from 'axios';
import thunk from 'redux-thunk'
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_NICKNAME = 'UPDATE_NICKNAME'
export const START_SMURF = 'START_SMURF'
export const FETCH_SMURF = 'FETCH_SMURF'
export const ADD_SMURF = 'ADD_SMURF'
export const SMURF_ERROR = 'SMURF_ERROR'

export const getSmurfs = () => (dispatch) => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        dispatch({type: FETCH_SMURF, payload: res})
    })
    .catch( err =>{
        dispatch({type: SMURF_ERROR, payload: err})
    })

}

export function fetchSmurf(fetchSmurf){
    return{
        type: FETCH_SMURF,
        payload: fetchSmurf
    };
}

export function startSmurf(startSmurf){
        return{
        type: START_SMURF,
        payload: startSmurf
    }

}

export function addSmurf(newSmurf){
        return {
            type: ADD_SMURF,
            payload: newSmurf
        }
    }
    
    export function smurfError(error){
        return {
            type: SMURF_ERROR,
            payload: error
        }
    }

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

// / export function updateName(newName){
    //     return {
    //         type: UPDATE_NAME,
    //         payload: newName
    //     }
    // }
    
    // export function updateNickname(newNickName){
    //     return{
    //         type: UPDATE_NICKNAME,
    //         payload: newNickName
    //     }
    // }
    
    // export function updatePosition(newPosition){
    //     return{
    //         type: UPDATE_NICKNAME,
    //         payload: newPosition
    //     }
    // }
    
    // export function updateSummary(newSummary){
    //     return{
    //         type: UPDATE_NICKNAME,
    //         payload: newSummary
    //     }
    // }