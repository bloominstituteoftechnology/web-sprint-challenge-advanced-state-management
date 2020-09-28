import{
    FETCH_SMURF_DATA,
    FETCH_SMURF_DATA_FETCH,
    ADD_SMURF,
} from "../actions/actions"

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
                newSmurf:action.payload
            }
            default:
                return state;
    }
}