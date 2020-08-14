

// step 1. Set up the state! 
const initialState = {
    smurfs: [], 
    loading: false, 
    error: "", 
}

// step 2. The store needs a reducer to be shared with state
// intialize it with just a default case and an export in the declaration
// see Index.js for step 3
export const smurfReducer = (state=initialState, action) => {
    switch(action.type) {
            default:
                return state; 
    }
}