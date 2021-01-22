import { API_START, API_SUCCESS, API_FAILURE, POST_CHECK, POST_SUCCESS, POST_FAILURE } from '../actions/index'

export const initialState = {
    smurfsArr: [],
    isLoading: false,
    errorText: ''
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case 'API_START':
            return{
                ...state, isLoading : true
            }
        case 'API_SUCCESS':
            return{
                ...state, isLoading: false,
                smurfsArr: action.payload
            }
        case 'API_FAILURE':
            return{
                ...state, isLoading : false,
                errorText: action.payload
            }
        case 'POST_CHECK':
            return{
                ...state, isLoading: true
            }
        case 'POST_SUCCESS':
            return{
                ...state, isLoading:false,
                smurfsArr: action.payload
            }
        case 'POST_FAILURE':
            return{
                ...state, isLoading:false,
                errorText: action.payload
            }
        default: 
            return state
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