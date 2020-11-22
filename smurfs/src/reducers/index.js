const initialState = {
    isLoading: false,
    isError: false,
    error: "",
    name: "",
    age: "",
    height: ""

}

const smurfReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default smurfReducer