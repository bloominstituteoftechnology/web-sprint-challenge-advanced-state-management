import axios from "axios"

export let getSmurfs_Success = "getSmurfs_Success"

let getSmurfList = function(){
return function(dispatch){
axios.get("http://localhost:3333/smurfs")
.then(function(data){
    dispatch({type: getSmurfs_Success,payload: data.data})
})
}
}

export default getSmurfList