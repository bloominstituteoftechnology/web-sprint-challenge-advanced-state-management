import {FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL} from '../actions/action';

export const initialState = {
    smurfs: [],
    error: "",
    isLoading: false
};

export const reducer = (state = initialState, action) => {
console.log('reducer', action);
switch(action.type) {
    case FETCH_SMURF_START:
        return {
            ...state,
            isLoading: true
        };
    case FETCH_SMURF_SUCCESS:
         return {
             ...state,
            error: "",
            isFetching: false,
            smurfs: action.payload
        };
    case FETCH_SMURF_FAIL:
            return {
                 ...state,
                error: action.payload,
                isLoading: false
             };
             
                default: console.log("default case")
                return state;
};
}