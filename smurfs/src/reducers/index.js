const initialState = {
    smurfs: [],
    isLoading: false,
    error: "",
}

const FETCH_START = "FETCH_START"; // TO BE DELETED LATER SOFIA

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
            default:
                return state;
    }
};