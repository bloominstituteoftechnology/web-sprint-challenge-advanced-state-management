import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_ERROR,
    NEW_SMURF_START,
    NEW_SMURF_SUCCESS,
    NEW_SMURF_ERROR,
} from "../Actions/Actions";

const initialState = {
    smurfs: [],
    isFetching: false,
    error: "",
};

export const Reducer = (state = initialState, action) => {
    console.log("This is the reducer", action);
    switch (action.type) {
        case FETCHING_SMURF_START:
            return { ...state, isFetching: true, error: "" };

        case FETCHING_SMURF_SUCCESS:
            return { ...state, smurfs: action.payload, isFetching: false, error: "" };

        case FETCHING_SMURF_ERROR:
            return { ...state, isFetching: false, error: action.payload };

        case NEW_SMURF_START:
            return { ...state, isFetching: true, error: "" };

        case NEW_SMURF_SUCCESS:
            return { ...state, smurfs: action.payload, isFetching: false, error: "" };

        case NEW_SMURF_ERROR:
            return { ...state, isFetching: false, error: action.payload };
        default:
            return state;
    }
};

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary