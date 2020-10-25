import { FETCH_SMURFS,FETCH_SMURFS_SUCCESS,FETCH_SMURFS_FAILURE } from "../actions/getSmurfs"
import { POST_SMURFS, POST_SMURFS_FAILURE, POST_SMURFS_SUCCESS } from "../actions/postSmurfs"

const initialState={
    smurfs:[],
    fetching:false,
    fetchError:'',
    smurf:{ 
 
    },
    posting:false,
    postError:''

}

export const smurfReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_SMURFS:
            return {...state,
                    fetching:true}
        case FETCH_SMURFS_SUCCESS:
            return {...state,
                    smurfs:action.payload,
                    fetching:false}
        case FETCH_SMURFS_FAILURE:
            return {...state,
                    fetching:false,
                    fetchError:action.payload}
        case POST_SMURFS:
            return{...state,
            posting:true}
        case POST_SMURFS_SUCCESS:
            return {...state,
            smurfs:action.payload,
            posting:false}
        case POST_SMURFS_FAILURE:
            return {...state,
                posting:false,
                postError:action.payload}
        default:
            return state
    }
}