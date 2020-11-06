import { GET_SMURF_START, GET_SMURF_SUCCESS, GET_SMURF_FAILURE } from '../actions/smurfActions';

const initialState = {
    isLoading: false,
    smurf: [],
    error: ''
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURF_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case GET_SMURF_SUCCESS:
            return {
                isLoading: false,
                smurf: action.payload,
                error: action.payload
            };
        default:
            return state;
    };
};
