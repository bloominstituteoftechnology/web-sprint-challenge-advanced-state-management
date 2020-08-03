import  { FETCH_DATA, FETCH_SUCCESS, FETCH_FAIL, POST_DATA, POST_SUCCESS, POST_FAIL} from '../actions/actions';

const initialState = {
    smurfs: [],
    insFetching:false,
    isPosting: false,
    error:''
}

const smurfReducer = (state=initialState, actions)=>{
    switch(actions.type){
        case FETCH_FAIL:
            return {
                ...state, insFetching:true
            }
            case FETCH_SUCCESS:
                return {
                    ...state,
                    insFetching: false,
                    players: actions.payload
                }
        case FETCH_FAIL:
                return {
                    ...state,
                    insFetching: false,
                    error: actions.payload
                }
         
        case POST_DATA:
            return{
                ...state,
                isPosting: true,
                players: [...state.players]
            }

        case POST_SUCCESS:
            return {
                ...state,
                isPosting: false,
                players: actions.payload
            }    

        case POST_FAIL:
            return {
                ...state,
                isPosting: false,
                error: actions.payload
            }    

                  
                default:
                    return state
    }
}

export default smurfReducer;