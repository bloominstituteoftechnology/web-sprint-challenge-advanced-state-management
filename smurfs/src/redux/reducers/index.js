//Actions import
import { GET_SMURFS, GET_SMURFS_SUCCESS, GET_SMURFS_FAIL } from '../actions'

//Initialize base app state
const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
}

//Reducer for modifying state
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SMURFS:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: ''
            };
        case GET_SMURFS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
} 