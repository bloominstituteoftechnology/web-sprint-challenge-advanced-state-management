import { getDefaultNormalizer } from "@testing-library/react";

import { LOADING, SUCCESS, ERROR, ERROR_MESSAGE, ADD_SMURF } from "../actions/index";

export const initialState = {
    loading: false,
    smurfData: [],
    error: ''
}


// ??? why would I need to export this ???
// because you used curlies on reducer import in index.js
const reducer = (state = initialState, action ) => {
    switch(action.type){
        case LOADING:
            return {
                ...state,
                loading: true,
            };
            
            case SUCCESS:
                return {
                    ...state, 
                    loading: false,
                    smurfData: action.payload,
                };

            case ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

            case ADD_SMURF:
                return {
                    ...state,
                    loading: false,
                    smurfData: [...state.smurfData, action.payload]
                    //this will add whatever your new smurf object is to the array
                }
            
                // This is an additional case
                case ERROR_MESSAGE:
                    return {
                        ...state,
                        loading: false,
                        error: action.payload,
                    }
        
        default:
            return state;
    }
};

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs - ok
//  - a boolean indicating if the app is loading -ok
//  - a string indicating a possible error message -ok

//2. Add in the arguments needed to complete a standard reducer function. - ok

//3. Add in a reducer case to accomidate the start of a smurf fetch. - ok i think

//4. Add in a reducer case to accomidate the successful smurf api fetch.

//5. Add in a reducer cases to accomidate the failed smurf api fetch.

//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.

//7. Add in a reducer case that adds in a value to the error message.