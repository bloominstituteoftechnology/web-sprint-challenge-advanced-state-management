import {
    GET_SMURFS_START,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAIL,
    ADD_SMURFS_START,
    ADD_SMURFS_SUCCESS,
    ADD_SMURFS_FAIL,
    ADD_ERROR
} from "../actions"

export const initialState = {
    loadingSmurfs: false,
    addingSmurf: false,
    smurfs: [],
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SMURFS_START: 
            return {
                ...state,
                loadingSmurfs: true
            }
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                loadingSmurfs: false,
                smurfs: action.payload
            }
        case GET_SMURFS_FAIL: 
            return {
                ...state,
                loadingSmurfs: false,
                error: action.payload
            }
        case ADD_SMURFS_START:
            return {
                ...state,
                addingSmurf: true,
                error: null
            }
        case ADD_SMURFS_SUCCESS:
            return {
                ...state,
                addingSmurf: false,
                smurfs: action.payload
            }
        case ADD_SMURFS_FAIL:
            return {
                ...state,
                addingSmurf: false,
                error: action.payload
            }
        case ADD_ERROR: 
            return {
                ...state,
                error: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary