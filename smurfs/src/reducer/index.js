import { FETCH_SMURFS_START } from '../action'


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
            
        default: 
            return state
    }
}