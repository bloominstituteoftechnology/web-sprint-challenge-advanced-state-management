// import {UPDATE_NAME, UPDATE_NICKNAME, UPDATE_POSITION, UPDATE_SUMMARY} from '../actions'
import {SMURF_ERROR,ADD_SMURF, FETCH_SMURF,START_SMURF} from '../actions'

// export const initialState = {
// }

// const reducer = ()=>{
// }

// export default reducer;


// Reducer creation flow this is step 1 of the redux building pattern
export const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

export const smurfReducer = (state= initialState, action ) =>{
    switch(action.type){
        case ADD_SMURF:
            return {
                ...state,
                smurfs: action.payload
            };
            case SMURF_ERROR:
                return{
                    ...state,
                    error: 'dont work'
                }
                case FETCH_SMURF:
                    return{
                    ...state,
                    isFetching: true
                    }
                    case START_SMURF:
                        return{
                            ...state,
                            // add api
                            smurfs: action.type
                        }
                        case SMURF_ERROR:
                            return{
                                ...state,
                                isFetching: false
                            }
            
    }   

}

export default smurfReducer
//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//X3. Add in a reducer case to accomidate the start of a smurf fetch.
//X4. Add in a reducer case to accomidate the successful smurf api fetch.
//X5. Add in a reducer cases to accomidate the failed smurf api fetch.
//X6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//X7. Add in a reducer case that adds in a value to the error message.