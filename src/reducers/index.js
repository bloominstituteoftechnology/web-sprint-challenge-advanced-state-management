import { FETCH_SUCCESS, FETCH_START, FETCH_FAIL, ADD_SMURF, ADD_ERROR_MESSAGE } from '../actions/index';


export const initialState = {
    smurfArray: [],
    loading: false,
    errorMessage: ''
}

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_START:
            return {
                ...state, loading: true
            }
        case FETCH_SUCCESS:
            return {
                ...state, loading: false, smurfArray: action.payload
            }
        case FETCH_FAIL:
            return {
                ...state, loading: false, errorMessage: action.payload
            }
            // action.payload = {
            //   name, nickname, position, summary
            // }
        case ADD_SMURF:
            return {
                ...state, smurfArray: [...state.smurfArray, action.payload]
            }
        case ADD_ERROR_MESSAGE: 
            return {
                ...state, errorMessage: action.payload
            }
            default:
                return state;
        }
}



//Task List:
//1. Adds the following state values into the initialState:[x]
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.[x]//FETCH_START
//4. Add in a reducer case to accomidate the successful smurf api fetch.[x] //FETCH_SUCCESS
//5. Add in a reducer cases to accomidate the failed smurf api fetch.[x] //FETCH_FAIL
//6. Add in a reducer case to accomidate adding a smurf [x](including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.[x]