import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, ADD_SMURF} from "../actions";

const initialState = {
    isLoading: false,
    smurfs: [],
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true
            };

        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload,
                error: ""
            };

        case ADD_SMURF:   
            return {
                ...state,
                smurfs: action.payload
            };

        default:
            return state;
    };
};