import { START_FETCH_SMURF,
    SUCCESS_FETCH_SMURF,

    FAIL_FETCH_SMURF,
    ADD_SMURF,
    SET_VALUE_TO_ERROR_MESSAGE } from "../actions/";

const initialState = {
smurfs: [],
isLoading: false,
dataError: "",
errorMessage: "" 
}

const reducer = (state=initialState, action)=>{
switch(action.type) {
   case START_FETCH_SMURF:
       return({
           ...state,
           isLoading: true
       });
   case SUCCESS_FETCH_SMURF:
       return({
           ...state,
           isLoading: false,
           smurfs: action.payload
       });
   case FAIL_FETCH_SMURF:
       return({
           ...state,
           dataError: action.type,
           isLoading: false
   });        
   case ADD_SMURF:
       return({
           ...state,
           smurfs: [...state.smurfs, action.payload] 
       });
   case SET_VALUE_TO_ERROR_MESSAGE:

       return({
           ...state,
           errorMessage: action.payload
       });       
   default:
       return state;
}
}

export default reducer;

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