import {  SMURF, ADD, FAIL, DATA_FAIL } from "../actions/index";

export const initialState = {
    smurfs: [],
    loading: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case (SMURF):
            return ({ ...state, smurfs: action.payload, loading: false });
        case (ADD):
            return ({ ...state, smurfs: 
                [...state.smurfs,
                {
                        name: action.payload.name,
                        position: action.payload.position,
                        description: action.payload.description,
                        nickname: action.payload.nickname
                        
                }
                ],
                
            });
        case (FAIL):
            return ({ ...state, loading: false, err: 
                        action.payload });
        case (DATA_FAIL):
            return ({ ...state, loading: false, 
                        err: action.payload });
        default:
            return state;
    }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary