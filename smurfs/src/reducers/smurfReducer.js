import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    ON_NAME_INPUT_CHANGE,
    ON_AGE_INPUT_CHANGE,
    ON_HEIGHT_INPUT_CHANGE,
    POST_SMURF_START,
    POST_SMURF_SUCCESS
} from '../actions/smurfActions.js'

const initialState = {
    isFetching: false,
    error: "",
    formValues: {
        name: '',
        age: '',
        height: '',
    },
    smurfList: [],
    formDisabled:false,
    postSuccess:null,
}
const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfList: [...state.smurfList, ...action.payload]
            };
        case POST_SMURF_START:
            return {
                ...state,
                smurfList: [...state.smurfList, state.formValues]
            };
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                postSuccess: action.payload
            };
        case ON_NAME_INPUT_CHANGE:
            return {
                ...state,
                formValues: {...state.formValues,
                    name: action.payload.target.value
                }
            };
        case ON_AGE_INPUT_CHANGE:
            return {
                ...state,
                formValues: {...state.formValues,
                    age: action.payload.target.value
                }
            };
        case ON_HEIGHT_INPUT_CHANGE:
            return {
                ...state,
                formValues: {...state.formValues,
                    height: action.payload.target.value
                }
            };
        default:
            return state
    };
};

export default smurfReducer;