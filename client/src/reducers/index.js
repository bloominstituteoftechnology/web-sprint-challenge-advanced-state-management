import {FETCHING_SMURF_START, FETCHING_SMURF_SUCCESS, FETCHING_SMURF_FAIL, ADD_SMURF} from '../actions/index';

export const initialState = {
    smurfs:[],
    newSmurf:{
        name:'',
        nickname:'',
        position:''
    },
    isLoading:false,
    error:''
};

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCHING_SMURF_START:
            return{...state};

        case FETCHING_SMURF_SUCCESS:
            return{
            ...state,
            smurfs:action.payload,
            isLoading:false
        };

        case FETCHING_SMURF_FAIL:
        return{
            ...state,
            error:action.payload
        };

        case ADD_SMURF:
            const newSmurf = {
                name:action.payload,
                position:action.payload,
                nickname:action.payload,
                description:action.payload
            };
            return{
                ...state,
                smurfs: [...state.smurfs, newSmurf]}
            

        default:
            return state;
    }
}


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