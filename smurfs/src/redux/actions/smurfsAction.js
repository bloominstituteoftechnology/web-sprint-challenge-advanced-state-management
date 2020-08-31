import * as actions from './types'
import {smurfsApi} from '../../api/smurfs'
import axios from 'axios'
export const userError = (error) => {
  return {
    type: actions.USER_FETCH_FAILED,
    error,
  }
}

export const deleteUser = (id) => {
  return {
    type: actions.USER_DELETE_SUCCESS,
    id,
  }
}

export const addSmurf = (data) => {
  return {
    type: actions.SMURF_ADDED_SUCCESS,
    data,
  }
}

export const fetchUser = () => {
  return {
    type: actions.FETCHING_USER,
  }
}
export const singleSmurf = (data) => {
  return {
    type: actions.SINGLE_SMURF_SUCCESS,
    data,
  }
}

export const fetchUserSuccess = (data) => {
  return {
    type: actions.USER_FETCH_SUCCESS,
    data,
  }
}

export const fetchUserApi = () => {
  return (dispatch) => {
    smurfsApi.get('/smurfs').then((res) => {
      dispatch(fetchUser())
      dispatch(fetchUserSuccess(res.data))
    })
  }
}

export const getSingleSmurf = (id) => {
  return (dispatch) => {
    smurfsApi.get('/smurfs').then((res) => {
      dispatch(fetchUser())
      const single = res.data.find((smurf) => smurf.id === id)
      dispatch(singleSmurf(single))
    })
  }
}

export const addNewSmurf = (data) => {
  return (dispatch) => {
    smurfsApi.post('/smurfs', data).then((res) => {
      console.log('POST', res.data)
      dispatch(addSmurf(res.data))
    })
  }
}
