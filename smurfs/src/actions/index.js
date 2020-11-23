import axios from "axios"

export const LOADING ="LOADING"
export const DATA_LOAD_SUCCESS ="DATA_LOAD_SUCCESS";
export const DATA_LOAD_FAILURE ="DATA_LOAD_FAILURE";

const loadDataForLocation =  (location) =>(disptach) =>{
dispatch({type:LOADING});
console.log('making your axios call')
setTimeout(() =>{
    axios.get(`http://localhost:3333/smurfs`)
    .then((res) =>{
        console.log(`KH: acions.js loadDataForLocation axios:good`, res)
        dispatch({type:DATA_LOAD_SUCCESS,payload:res.data.all})
    })
    .catch(err =>{
        console.log(`KH acions.js loadDataForLocation axios bad`, err)
        dispatch({type:DATA_LOAD_FAILURE,payload:'error fetching data${err.message}'})
    })
}, 1500)


}

