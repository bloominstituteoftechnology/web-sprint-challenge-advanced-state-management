import { GET_SMURFS_START, GET_SMURFS_FAILURE, GET_SMURFS_SUCCESS, ADD_NEW_SMURF } from '../actions';

const initialState = {
    isLoading: false,
    smurfs: [],
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SMURFS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case GET_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            };
            case ADD_NEW_SMURF:
                console.log(action);
                return {
                    ...state,
                    smurfs: [ 
                        ...state.smurfs,
                        {
                            name: action.name,
                            age: action.age,
                            height: action.height
                        }
                    ]
                }
        default:
            return state;
    }
};