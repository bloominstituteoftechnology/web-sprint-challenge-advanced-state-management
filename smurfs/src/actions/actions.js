import axios from 'axios';

export const FETCH_SMURF_DATA = "FETCH_SMURF_DATA"
export const FETCH_SMURF_DATA_FETCH = "FETCH_SMURF_DATA_FETCH"
export const ADD_SMURF ="ADD_SMURF"

export const fetchData = () => (dispatch) =>{
    dispatch({type: FETCH_SMURF_DATA_FETCH})

    axios
.get("http://localhost:3333/smurfs")
.then((res) =>{
    dispatch({
        type:FETCH_SMURF_DATA,
        payload:res.data
    })
    // .catch((err) =>{
    //     console.error("sumrf error :(", err)
    // })
})

}


export const addSmurf =(smurf) => (dispatch)=>{
    axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) =>{
        dispatch({
            type:ADD_SMURF,
            payload:res.data
        })
        // .catch(err =>{
        //     console.log("smurf error",err)
        // })
    })

}