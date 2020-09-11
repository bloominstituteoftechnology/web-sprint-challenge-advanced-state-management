import { LOADING_SMURFS, FETCHING_SMURFS, POSTING_SMURF, ERROR_SMURFS } from '../actions';

const initialState = {
    smurf: [],
    isLoading: false,
    error: 'Error'
};

const smurfApiCalls = (state = initialState, action) => {
    switch(action.type) {
        case LOADING_SMURFS:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCHING_SMURFS:
            return {
                ...state,
                smurf: action.payload,
                isLoading: false,
                error: ''
            }
        case POSTING_SMURF:
            return {
                ...state,
                smurf: action.payload,
                isLoading: false,
                error: ''
            }
        case ERROR_SMURFS:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
};

export default smurfApiCalls;
