import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ERROR,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_ERROR,
} from "../actions"

const initialState = {
    smurfs: [],
    isLoading: false,
    error: '',
}

export const smurfReducer = (state=initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}