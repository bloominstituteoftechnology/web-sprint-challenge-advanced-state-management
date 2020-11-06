export let onType = "onType"

export let onChange = function(event){ 
    console.log(event.target.value)
    let {value} = event.target
return function (dispatch){
dispatch({type: onType,payload: value})
}
}
    


