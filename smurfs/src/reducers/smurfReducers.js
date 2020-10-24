import { FETCHING_SMURFS_START } from '../actions/smurfsActions';
import { FETCHING_SMURFS_SUCCESS } from '../actions/smurfsActions';
import { FETCHING_SMURFS_FAILURE } from '../actions/smurfsActions';

export const initialState = {
    name: "",
    age: "",
    height: "",
    id: ""
}

export const reducer = (state = initialState, action) => {
    console.log('reducer', action)
    switch(action.type) {
        
    }
}