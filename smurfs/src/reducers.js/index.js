import{
    LOADING,
    DATA_LOAD_SUCCESS,
    DATA_LOAD_FAILURE
} from "../actions/index"

const initialState ={
    is_fetching:false,
    smurfList:[],
    error:''
}


const smurfReducer =(state = initialState, action) =>{
    switch(action.type){
        case LOADING:
            return{
                ...state,
                is_fetching:true
            }
            case DATA_LOAD_SUCCESS:{
                return{
                    ...state,
                    is_fetching:false,
                    smurfList:action.payload
                }
            }
            case DATA_LOAD_FAILURE:{
                return{
                    ...state,
                    is_fetching:false,
                    error:action.payload
                }
            }
            default:
                return state;
    }
    
}

export default smurfReducer;