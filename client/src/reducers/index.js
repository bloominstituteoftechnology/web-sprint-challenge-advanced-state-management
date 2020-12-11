import {FETCHING_SMURF_START, FETCHING_SMURF_SUCCESS, FETCHING_SMURF_FAIL} from '../actions/index';

export const initialState = {
    appLoading: false,
    error: '',
    smurfs : [
        {
            id: '',
            name: '',
            position:'',
            nickname: '',
            description:''
        }
    ]
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case(FETCHING_SMURF_START):
            return({
                ...state,
                appLoading: true,
                error: ''
            })
            case(FETCHING_SMURF_SUCCESS):
                return({
                    ...state,
                    smurf: action.payload,
                    appLoading: false
                })
                case(FETCHING_SMURF_FAIL):
                    return({
                        ...state,
                        error: action.payload
                    })
        default:
            return(state)
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