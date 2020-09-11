import React from 'react'

function Smurfs ({ facts }){
    return (
        <>
        <p>Name: {facts.name}</p>
        <p>Age: {facts.age}</p>
        <p>Height: {facts.height}</p>
        </>
    )
}

export default Smurfs