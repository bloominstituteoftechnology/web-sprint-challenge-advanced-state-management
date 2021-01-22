import {GET_SMURF_START, GET_SMURF_SUCCESS, GET_SMURF_FAIL, POST_SMURF_START, POST_SMURF_SUCCESS, POST_SMURF_FAIL} from "../actions/index"
export const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: ''
}

 export const reducer = (state = initialState, action) => {
    switch(action.type){
        case(GET_SMURF_START):
            return({
                ...state,
                isFetching: true,
                error: ''
            })
        case(GET_SMURF_SUCCESS):
            return({
                ...state,
                smurfs: [...action.payload],
                isFetching: false,
            })
        case(GET_SMURF_FAIL):
            return({
                ...state,
                isFetching: false,
                error: " You done Smur*ed up "
            })
        case(POST_SMURF_START):
            return({
                ...state,
                isPosting: true,
            })
        case(POST_SMURF_SUCCESS):
            return({
                ...state,
                smurfs: [...action.payload],
                isPosting: false,
            })
        case(POST_SMURF_FAIL):
            return({
                ...state,
                isPosting: false,
                error: "You smurfed up"
            })
        default:
            return state;
    }
}


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