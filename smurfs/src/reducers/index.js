import { FETCH_DATA, FETCH_SUCCESS, FETCH_FAILURE, POST_DATA, POST_SUCCESS, POST_FAILURE } from '../actions';
import axios from 'axios';

const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: '',
}

const smurfReducer = (state = initialState, actions) => {
  
        switch(actions.type) {
            case FETCH_DATA:
                return {
                    ...state, 
                    isFetching: true, 
                }
            case FETCH_SUCCESS:
                return {
                   ...state, 
                   isFetching: false, 
                   smurfs: actions.payload     
                } 
            case FETCH_FAILURE: 
                return {
                    ...state,
                    isFetching: false,
                    error: actions.payload,
                } 
            case POST_DATA:
                return{
                    ...state,
                    isPosting: true, 
                    smurfs: [...state.smurfs]
                }
            case POST_SUCCESS:
                return{
                     ...state, 
                     isPosting: false,
                     smurfs: actions.payload
                } 
            case POST_FAILURE:
                return{
                    ...state,
                    isPosting: false, 
                    error: actions.payload 
                }                  
                default:
                    return state  
        }
       
    }  
  
export default smurfReducer;
