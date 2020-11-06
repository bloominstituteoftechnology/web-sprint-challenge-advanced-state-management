import Axios from "axios"
import React,{useEffect} from "react"
import { connect } from "react-redux"
import getSmurfList from "../actions"
import Smurf from "./Smurf"

let Smurflist = function(props){
    useEffect(function(){
        props.getSmurfList()
    },[])

    console.log(props.smurfs)

    return (
        <div>
            {props.smurfs.map(function(item){
                return <Smurf smurf={item}/>
            })}
        </div>
    )
}

let mapStateToProps = function(state){
return {
    smurfs: state.Reducer.smurfs
}
}

export default connect(mapStateToProps,{getSmurfList})(Smurflist)