import React from 'react'

export default function SmurfsCard(props) {
    return (
        <div>
            <h2 >{props.smurf.name}</h2>
            <h3>{props.smurf.age}</h3>
            <h3>{props.smurf.height}</h3>

        </div>
    )
}
