import { SMURFS_LOADING, FETCH_SMURFS_SUCCESS, SMURFS_FAIL } from '../actions/actions'

const inititalState = {
    smurf: [],
    isLoading: false,
    error:'Error loading'
};

const smurfReducer = (state = inititalState, action) => {
    switch(action.type) {
        case SMURFS_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurf: action.payload,
                isLoading: false,
                error: ''
            }
        case SMURFS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};

export default smurfReducer;