import { SMURF_LOADING, SMURF_SUCCESS, SMURF_ERROR } from '../actions/smurfActions'

const initialState = {
    smurfs: [],
    loading: false,
    error: ''
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        case SMURF_LOADING:
            return{
                ...state,
                loading: true,
            }
        case SMURF_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                loading: false
            }
        case SMURF_ERROR:
            return{
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}