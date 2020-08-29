import axios from 'axios'
export const POST_DATA = 'POST_DATA';
export const FETCH_COMPLETE = 'FETCH_COMPLETE'


export const fetchSmurfData = () =>  dispatch => {
       
        axios.get(`http://localhost:3333/smurfs`)
            .then(response => {
                dispatch({
                    type: FETCH_COMPLETE,
                    payload: response.data
            })})}


export const postData = newSmurf => dispatch => {
       
        axios.post(`http://localhost:3333/smurfs`, newSmurf)
             .then (response => {
             dispatch({
            type: POST_DATA,
            payload: response.data
          })})}
