import { FETCH_SMURFS, FETCH_SMURFS_SUCCESS } from "../actions";

const initialState = {
    smurfs: []
}

export default (state = initialState, action) => {

    switch (action.type) {

        case FETCH_SMURFS:
            console.log('Fetching Smurfs')
            return {...state, smurfs: action.payload}

        case FETCH_SMURFS_SUCCESS:
            return {...state, smurfs: action.payload}
        default:
            return state;
    }
}