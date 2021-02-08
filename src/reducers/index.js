import { FETCH_SMURFS_FAILURE, FETCH_SMURFS_REQUEST, FETCH_SMURFS_SUCCESS, ADD_SMURFS} from '../actions/index';

export const initialState = {
    smurfs: [],
    loading: false,
    error: ''
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_SMURFS_REQUEST:  
            return {
                ...state, loading: true
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                loading: false, smurfs: action.payload, error:''
            }
        case FETCH_SMURFS_FAILURE:
            return {
                loading: false, error: action.payload, smurfs:[]
            }
        case ADD_SMURFS:
            return {
                ...state, smurfs: [...state.smurfs,action.payload]
            }
        default: return state;
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