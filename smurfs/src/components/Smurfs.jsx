import React from 'react'
import Smurf from './Smurf'

const Smurfs = props => {

  return (

    <div>
      {props.smurfs.map(smurf => <Smurf key={smurf.name} smurf={smurf} />)}
    </div>
  )
}


export default Smurfs