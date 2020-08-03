import React from 'react'


const SmurfCard = (props) => {
    console.log('smufcard',props)
    return(
        <>
            <h1>name:{props.smurf.name}</h1>
            <h1>age:{props.smurf.age}</h1>
            <h1>height:{props.smurf.height}</h1>
        </>
    )
}

export default SmurfCard