import {combineReducers} from 'redux'
import {smurfsReducer} from './smurfsReducer'
import {imageReducer} from './imageReducer'

export const rootReducer = combineReducers({
  smurfs: smurfsReducer,
  image: imageReducer,
})
