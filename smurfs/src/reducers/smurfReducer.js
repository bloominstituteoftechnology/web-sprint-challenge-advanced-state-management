import { FETCH_SMURF_FAILURE, FETCH_SMURF_START, FETCH_SMURF_SUCCESS, } from '../actions/smurfActions';
import {ADD_SMURF_START,ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE} from '../actions/addSmurfAction'

const initialState = {
    loading: false,
    errors: [],
    smurf: []
}

function smurfReducer(state = initialState, action) {
     switch(action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurf: action.payload,
                loading: false,
                errors: []
            }
        case FETCH_SMURF_FAILURE:
            return{
                ...state,
                errors: action.payload,
                loading: false
            }
        case ADD_SMURF_START:
         return {
            ...state,
            loading: true
         }
         case ADD_SMURF_SUCCESS:
         return {
            ...state,
            smurf: action.payload,
            loading: false,
            errors: []
         }
         case ADD_SMURF_FAILURE:
         return {
            ...state,
            errors: action.payload,
            loading: false
         }
                
        default:
            return state;
    }
 }

export default smurfReducer;