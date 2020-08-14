import { SMURF_LOADING, SMURF_SUCCESS, SMURF_FAILURE, ADD_SMURF } from '../actions/smurfActions'

// step 1. Set up the state! 
const initialState = {
    smurfs: [], 
    loading: false, 
    error: "", 
}

// step 2. The store needs a reducer to be shared with state
// intialize it with just a default case and an export in the declaration
// see Index.js for step 3
export const smurfReducer = (state=initialState, action) => {
    switch(action.type) {
        case SMURF_LOADING:
            return {
                ...state, 
                loading: true, 
            }
        case SMURF_SUCCESS: 
            return {
                ...state, 
                loading: false, 
                smurfs: action.payload
            }
        case SMURF_FAILURE: 
            return {
                ...state,
                loading: false, 
                error: action.payload
            }
        case ADD_SMURF: 
            return {
                ...state,
                loading: false, 
                smurfs: action.payload
            }

            default:
                return state; 
    }
}