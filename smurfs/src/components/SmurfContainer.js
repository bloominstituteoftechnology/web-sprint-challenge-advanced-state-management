import React from 'react'
import { connect } from 'react-redux'
import SmurfCard from './SmurfCard'

function SmurfContainer(props){
    console.log(props)

    return (
        <div>
            {props.smurfs.map(smurf => {
                return <SmurfCard smurf={smurf} key={smurf.id}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(SmurfContainer)