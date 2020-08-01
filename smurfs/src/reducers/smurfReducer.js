import { FETCH_SMURF_DATA, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL,
POST_SMURF_DATA, POST_SMURF_SUCCESS, POST_SMURF_FAIL  } from '../actions/smurfActions';

const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    errors: ''
}

const smurfReducer = (state = initialState, actions) => {
    switch(actions.type){
        case FETCH_SMURF_DATA:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: actions.payload
            }
        case FETCH_SMURF_FAIL:
            return {
                ...state,
                isFetching: false,
                error: actions.payload
            }
        case POST_SMURF_DATA:
            return {
                ...state,
                isPosting: true,
                smurfs: [...state.smurfs]
            }
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                isPosting: false,
                smurfs: actions.payload
            }
        case POST_SMURF_FAIL:
            return {
                ...state,
                isPosting: false,
                error: actions.payload
            }
        default: return state;
    }
}

export default smurfReducer;