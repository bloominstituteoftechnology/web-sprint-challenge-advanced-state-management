
export const initialState = {
    error: '',
    loading: false,
    smurfData: []

}

const reducer = (state = initialState, action )=>{
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs - ok
//  - a boolean indicating if the app is loading -ok
//  - a string indicating a possible error message -ok

//2. Add in the arguments needed to complete a standard reducer function. - ok

//3. Add in a reducer case to accomidate the start of a smurf fetch.

//4. Add in a reducer case to accomidate the successful smurf api fetch.

//5. Add in a reducer cases to accomidate the failed smurf api fetch.

//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.

//7. Add in a reducer case that adds in a value to the error message.