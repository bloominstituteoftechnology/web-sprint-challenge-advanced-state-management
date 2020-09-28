import React from 'react'

import { connect } from "react-redux"
import { addSmurf } from '../actions/actions'

const AddSmurf = (props) => {
    return(
     
            <button className="button" onClick ={() =>{
                props.addSmurf(props.data)
            }}> Add Smurf</button>

        
    )
    {console.log(props)}

}
export default connect(null, {addSmurf})(AddSmurf)