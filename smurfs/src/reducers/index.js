import { FETCHING_SMURF_START, FETCHING_SMURF_SUCCESS, SMURF_POST_START, SMURF_POST_SUCCESS} from "../actions";

const initialState = {
    smurf: [],
    nowLoading: false,
    error: ""
};

export const theReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SMURF_START:
        case SMURF_POST_START:
            return {
                ...state,
                nowLoading: true,
                error: ""
            };
        case FETCHING_SMURF_SUCCESS:
        case SMURF_POST_SUCCESS:
            return {
                ...state,
                nowLoading: false,
                smurf: action.payload
            };
            default:
                return state;
    }
}