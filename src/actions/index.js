import axios from 'axios';
import thunk from 'redux-thunk'
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_NICKNAME = 'UPDATE_NICKNAME'
export const UPDATE_POSITION = 'UPDATE_POSITION'
export const UPDATE_SUMMARY = 'UPDATE_SUMMARY'
export const ADD_SMURF = 'ADD_SMURF'
export const SMURF_ERROR = 'SMURF_ERROR'

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

// export function updateName(newName){
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
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.