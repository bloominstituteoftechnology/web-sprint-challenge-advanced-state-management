import React from "react"

let Smurf = function(props){
let {smurf} = props
return (
    <div>
        <p>Name:{smurf.name}, Age:{smurf.age}, Height:{smurf.height}</p>
    </div>
)
}

export default Smurf