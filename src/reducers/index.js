import { ADD_SMURF, FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, SET_ERROR_MESSAGE } from '../actions/index';

export const initialState = {
  smurfs: [
    {
      id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      name:'Poppa Smurf',
      position:'Village Leader',
      nickname: 'Pops',
      description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    }
  ],
  isLoading: false,
  errorMessage: ""
}

const reducer = (state = initialState, action)=>{
  console.log("reducer has fired, log action:", action);

  switch (action.type) {
    case ADD_SMURF:
      console.log("reducer fires: add smurf ")
      return { ...state, smurfs: [...state.smurfs, action.payload]}

    case SET_ERROR_MESSAGE:
      console.log("reducer fires: add error message ")
      return { ...state, errorMessage: action.payload}

    case FETCH_SMURFS_START:
      console.log("reducer fires: fetch smurf start ")
      console.log("log payload: ", action.payload)
      return { ...state, isLoading: true, smurfs: action.payload }
    
    case FETCH_SMURFS_SUCCESS:
      console.log("reducer fires: fetch species success ")
      return { ...state, isLoading: false, smurfs: action.payload }
    case FETCH_SMURFS_FAILURE:
      console.log("reducer fires: fetch smurf failure ")
      return { ...state, isLoading: false, error: action.payload }
  

    default:
      console.log("Error: unknown action type in App Reducer", action.type);
      return state;  
  }
};

export default reducer;



//Task List: COMPLETE
//1. Adds the following state values into the initialState:
//  - an array of smurfs//
//  - a boolean indicating if the app is loading//
//  - a string indicating a possible error message//

//2. Add in the arguments needed to complete a standard reducer function.//
//3. Add in a reducer case to accomidate the start of a smurf fetch.//
//4. Add in a reducer case to accomidate the successful smurf api fetch.//
//5. Add in a reducer cases to accomidate the failed smurf api fetch.//
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.//
//7. Add in a reducer case that adds in a value to the error message.//