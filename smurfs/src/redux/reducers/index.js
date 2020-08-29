import { combineReducers } from 'redux'
import { smurfsReducer } from './smurfsReducer'



export const rootReducer = combineReducers({
    smurfs: smurfsReducer,

})