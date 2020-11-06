import {getSmurfs_Success} from "../actions"

let initialstate = {
    smurfs: []
}

 let Reducer = function(state = initialstate,action){
    switch(action.type){
        case getSmurfs_Success:
            return {
                ...state,
                smurfs: action.payload
            }
        default:return state
    }
}

export default Reducer