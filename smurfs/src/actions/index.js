import axios from "axios";

export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";



export const submitForm = (search) => {
dispatch( {type: LOADING, search} )

axios.get("http://localhost:3333/smurfs")
.then(res => {
    console.log(res)
    dispatch({
        type: SUCCESS,
        payload: res})
})
.catch((err) => {
    dispatch({
        type: ERROR,
        payload: 'error loading data'})
})

}