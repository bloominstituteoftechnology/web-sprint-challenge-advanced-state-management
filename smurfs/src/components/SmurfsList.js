import React, { useEffect } from 'react'
import SmurfCard from './SmurfCard'
import {fetchSmurf} from '../actions/actions'
import {connect} from 'react-redux'

const SmurfsList = (props) => {

    console.log('smurflist', props)

    useEffect(() => {
        props.fetchSmurf()
    },[])        
        return(
            <>
            {props.smurfs.map(item => 
                <SmurfCard smurf={item}/>)}
            </>
        )   

}

const mapStateToProps = (state => {
    return{
        smurfs:state.smurfs,
        isFetching: state.isFetching,
        error:state.error

    }
})

export default connect(mapStateToProps,{fetchSmurf})(SmurfsList)