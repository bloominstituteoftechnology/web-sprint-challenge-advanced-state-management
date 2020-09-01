import {FETCH_SMURF,SMURF_FETCHED,ADD_SMURF,SMURF_ADDED,ADD_FAILED,FETCH_FAILED} from '../actions/getSmurfs';


const initialState=[
    {
        smurfs:[],
        // isFetching:false,
        isAdding:false,
        error:''
    }
];
export const smurfReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_SMURF:        
        case ADD_SMURF:
            return {...state,
            isAdding:true,
            error:''
            }

        case SMURF_FETCHED:        
        case SMURF_ADDED:
            return {...state,
                smurf: action.payload,
                isAdding: false
            }

        case FETCH_FAILED:
        case ADD_FAILED:
            return{...state,
            error: action.payload}

        default:
            return state
    }
}