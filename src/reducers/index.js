import {
    ADD_SMURF,
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_ERROR,
    ERROR_MESSAGE_SET,
} from '../actions';


export const initialState = {
    smurfsList: [],
    isLoading: false,
    error: '',

}
//sets axios call to state 
const reducer = (state = initialState, action)=> {
    switch (action.type) {
        case ERROR_MESSAGE_SET: 
        return{
            ...state,
            error: action.payload
        }
        case ADD_SMURF:
            return {
                ...state, 
                smurfsList: [...state.smurfsList, action.payload],
            }
     
        case FETCH_SMURF_START:
            return {
                ...state,
                isLoading:true,
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfsList: action.payload,
                isLoading: false,
                error: '',
            }
            case FETCH_SMURF_ERROR:
                return{
                    ...state,
                    isLoading: false,
                    error: action.payload,
                }

        default: return state;
        
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