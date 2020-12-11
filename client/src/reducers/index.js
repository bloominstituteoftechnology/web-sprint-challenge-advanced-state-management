// may import actions here

export const initialState = {
    smurfs: [],
    appLoading: false, 
    error: ''
};

export const reducer = (state = initialState, action)=>{
    switch(action.type) {
        case ("START_CALL"):
            return {
                ...state,
                appLoading: true
            }
        case ("CALL_SUCCESS"):
            return {
                ...state,
                smurfs: action.payload,
                appLoading: false
            }
        case ("CALL_FAILURE"):
            return {
                ...state,
                appLoading: false,
                error: action.payload
            }
        case ("START_ADD_SMURF"):
            return {
                ...state,
                appLoading: true
            }
        case ("ADD_SMURF_SUCCESS"):
            return {
                ...state,
                smurfs: action.payload.data,
                appLoading: false
            }
        case ("ADD_SMURF_FAILURE"):
            return {
                ...state,
                appLoading: false,
                error: action.payload
            }
        default:
            return (state);
    }
};

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