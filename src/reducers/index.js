import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF, SET_ERROR } from './../actions/index';

export const initialState = {
    smurfs: [],
    isLoading: false,
    errorMessage: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }
        case FETCH_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_SMURF:
                const newSmurf = {
                    ...action.payload,
                    id: Date.now()
                }

                return {
                ...state,
                smurfs: [...state.smurfs, newSmurf]
                }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
};

export default reducer;