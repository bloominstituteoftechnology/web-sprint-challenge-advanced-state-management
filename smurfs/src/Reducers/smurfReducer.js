import {
    ADD_SMURF,
    FETCH_SMURF,
    FETCHING_SMURF_ERROR
} from '../components/Actions/smurfActions';


const initialState = [
    {
        name: '',
        age: '',
        height: '',
        id: 0
    }
];

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SMURF:
            return {
                ...state,
                name: action.payload,
                age: action.payload,
                height: action.payload
            };
        case FETCH_SMURF:
            return {
                ...state,
                name: action.payload,
                age: action.payload,
                height: action.payload
            };
        case FETCHING_SMURF_ERROR:
            return {
                ...state, error: action.payload
            }
        default:
            return state;
    }
};