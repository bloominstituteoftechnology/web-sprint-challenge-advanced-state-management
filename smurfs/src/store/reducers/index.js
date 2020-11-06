import { GET_SMURFS_START, GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE, POST_SMURFS_START, POST_SMURFS_SUCCESS, POST_SMURFS_FAILURE } from '../actions/index';

const initialState = {
    smurf: {
        name: '',
        age: '',
        height: '',
        error: '',
    },
    smurfs: [],
    isLoading: false,
    isPosting: false,
}

export const smurfsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SMURFS_START:
            return {
                ...state,
                isLoading: true,
            }
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                // smurf: action.payload,
                isLoading: false,
            }
        case GET_SMURFS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            }
        case POST_SMURFS_START:
            return {
                ...state,
                isPosting: true,
            }
         case POST_SMURFS_SUCCESS:
            //  console.log(action.payload)
             return {
                 ...state,
                 smurfs: action.payload,
                //  smurfs: [...state.smurfs, action.payload],
                 isPosting: false,
              }
        case POST_SMURFS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isPosting: false,
            }    
        default:
            return state
    }
}