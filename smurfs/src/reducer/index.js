import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS } from '../action'


const initialState = { 
    smurfs: [], 
    isLoading: false,
    error: ""
}


export const rootReducer = (state = initialState, action) => { 
    switch(action.type) { 

        case FETCH_SMURFS_START: 
            return {
                    ...state, 
                    isLoading: true, 
                    error: ""
                   }

        case FETCH_SMURFS_SUCCESS: 
            return {
                ...state, 
                smurfs: action.payload,
                isLoading: false, 
                error: ""
                }
            
        default: 
            return state
    }
}