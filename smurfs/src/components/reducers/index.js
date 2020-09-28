import {
    ADD_SMURFS,
    FETCH_DATA,
    FETCH_SUCCESS
} from "../actions";

const initialState = {
smurf:{
    name:"",
    age:"",
    height:""
},
 smurfs: []
 
}

export const smurfsReducer = (state = initialState,action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs:action.payload,
                smurf:action.payload
            }
        case ADD_SMURFS:
            return {
                ...state,
                smurfs: state.smurfs

            }
            default:
                return state;
    }
}