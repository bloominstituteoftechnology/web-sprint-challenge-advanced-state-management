import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL, ADD_NEW_SMURF, UPDATE_ERROR_MESSAGE } from "../actions/index";


export const initialState = {
    smurfs: [],
    isLoading: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_SMURF_START):
        return({
        ...state,
        isLoading: true
        });
        
        case (FETCH_SMURF_SUCCESS):
        return({
        ...state,
        smurfs: action.payload, 
        isLoading: false
        })
        case (FETCH_SMURF_FAIL):
        return({
        ...state,
        isLoading: true,
        error: "whoops, something went wrong!" + action.payload,
        })            

        case (ADD_NEW_SMURF):
        return ({
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isLoading: false
        })
        case (UPDATE_ERROR_MESSAGE):
        return ({
        ...state,
        isLoading: true,
        error: "Whoops, you forgot to fill something out!"
        })    
        default:
            return state;
                
    } 
}


//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.