// import {UPDATE_NAME, UPDATE_NICKNAME, UPDATE_POSITION, UPDATE_SUMMARY} from '../actions'
import {} from '../actions'

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

const smurfReducer = (state= initialState, action ) =>{
    switch(action.type){
        case UPDATE_NAME:
            return {
                ...state,
                smurfs: action.payload
            };
            case UPDATE_NICKNAME:
                return{
                    ...state,
                    isFetching
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
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.