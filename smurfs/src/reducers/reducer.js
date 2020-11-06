const initialState = {
    data: [],
    loading: false,
    error: "",
    
}
export const fetchingStart = "FETCHING_DATA_START";
export const fetchingSuccess = "FETCHING_SUCCESS";
export const fetchingError = "FETCHING_ERROR";
export const addSmurfStart = "ADD_SMURF_TO_SERVER_START"
export const addSmurfSuccess = "ADD_SMURF_TO_SERVER_SUCCESS";
export const addSmurfErorr = "ADD_SMURF_TO_SERVER_ERROR";

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case addSmurfStart:
            return{...state, loading: true}
        case addSmurfSuccess:
            return{...state, loading: false, data: action.payload};
        case addSmurfErorr:
            return{...state, loading: false, error: action.payload};
        case fetchingStart:
        return{
            ...state, loading: true
        }
        case fetchingSuccess:
            return {
                ...state, laoding: false,
                data: action.payload
            }
            case fetchingError:
                return {
                    ...state, loading: false, error: action.payload
                }
        default:
            return state;
    }
}