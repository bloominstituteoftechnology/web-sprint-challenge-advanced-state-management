import { FETCHING_DATA_START, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAIL, ADD_SMURF, HANDLE_ERROR } from '../actions/index';

export const initialState = {
    smurfs: [],
    isFetching: false,
    error: null
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case(FETCHING_DATA_START):
            return({
                ...state,
                isFetching: true,
                error: null
            });
        case(FETCHING_DATA_SUCCESS):
            return({
                ...state,
                smurfs: [...state.smurfs, ...action.payload],
                isFetching: false,
                error: null
            });
        case(FETCHING_DATA_FAIL):
            return({
                ...state,
                error: action.payload
            });
        case(ADD_SMURF):
            return({
                ...state,
                smurfs: [...state.smurfs, action.payload],
                error: null
            });
        case(HANDLE_ERROR):
            return({
                ...state,
                error: action.payload
            })
        default:
            return state;
    }
}

export default reducer;

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