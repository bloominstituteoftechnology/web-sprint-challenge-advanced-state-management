import { FETCH_SMURFS_SUCCESS, FETCH_SMURFS_START, FETCH_SMURFS_FAILURE, ADD_SMURF, SET_ERROR } from '../actions/index'
export const initialState = {
    smurfs: [],
    isLoading: false,
    errorMessage: ''
}

export const reducer = ( state = initialState, action )=> {
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                errorMessage: ''
            }
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }
        case ADD_SMURF:
            const newSmurf = {
                name: action.payload,
                position: action.payload,
                nickname: action.payload,
                description: action.payload
            };
            return {
                ...state,
                smurfs: [...state.smurfs, newSmurf],
                isLoading: false
            }
        case SET_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload

            }
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