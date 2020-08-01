import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL, POST_SMURF_START, POST_SMURF_SUCCESS, POST_SMURF_FAIL } from '../actions/actionsIndex';

const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: ''
};

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload,
                error: ''
            }
        case FETCH_SMURF_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case POST_SMURF_START:
            return {
                ...state,
                isPosting: true,
                smurfs: [...state.smurfs]
            }
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload,
                error: ''
            }
        case POST_SMURF_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }

};

