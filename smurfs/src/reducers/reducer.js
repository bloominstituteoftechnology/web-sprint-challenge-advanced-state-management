const initialState = {
    data: [],
    loading: false,
    error: ""
}
export const fetchingStart = "FETCHING_DATA_START";
export const fetchingSuccess = "FETCHING_SUCCESS";
export const fetchingError = "FETCHING_ERROR";

export const reducer = (state=initialState, action) => {
    switch(action.type){
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