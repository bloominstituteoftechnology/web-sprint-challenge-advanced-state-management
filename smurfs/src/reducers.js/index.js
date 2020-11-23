// import{
//     LOADING,
//     DATA_LOAD_SUCCESS,
//     DATA_LOAD_FAILURE,
//     ADD_SMURF
// } from "../actions/index"

// const initialState ={
//     is_fetching:false,
//     smurfList:[],
//     error:'',
    
// }


// export const smurfReducer =(state = initialState, action) =>{
//     switch(action.type){
//         case LOADING:
//             return{
//                 ...state,
//                 is_fetching:true
//             }
//             case DATA_LOAD_SUCCESS:
//                 return{
//                     ...state,
//                     is_fetching:false,
//                     smurfList:action.payload
                
//             }
//             case DATA_LOAD_FAILURE:
//                 return{
//                     ...state,
//                     is_fetching:false,
//                     error:action.payload
                
//             }

//             case ADD_SMURF:
//                 return{
//                     ...state,
//                    smurfList:action.payload

//                 }
            
//             default:
//                 return state;
//     }
    
// }
import{
    FETCH_SMURF_DATA,
    FETCH_SMURF_DATA_FETCH,
    ADD_SMURF,
} from "../actions/index"

const initialState ={
    isLoading:false,
    newSmurfs:[]
}

export const smurfReducer = (state = initialState,action) =>{
    switch(action.type){
        case FETCH_SMURF_DATA_FETCH:
            return{
                ...state,
                isLoading:true
            }
        case FETCH_SMURF_DATA:
            return{
                ...state,
                newSmurfs:action.payload,
                isLoading:false

            }
        case ADD_SMURF:
            return{
                ...state,
                newSmurfs:action.payload
            }
            default:
                return state;
    }
}
