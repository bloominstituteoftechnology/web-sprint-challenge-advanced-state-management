import React from 'react'
import { connect } from 'react-redux'
import {onChange} from "../actions/SmurfFormActions"

let SmurfForm = function(props){
return(
    <div>
        <h1>Add New Villager</h1>
        <form>

            <label>Name:
                <input
                name="name"
                value={props.name}
                onChange={onChange}
                />
            </label>
            <br/>

            <label>Age:
                <input
                name="age"
                value={props.age}
                onChange={onChange}
                />
            </label>
            <br/>

            <label>Height
                <input
                name="height"
                value={props.height}
                onChange={onChange}
                />
            </label>
            <br/>

        </form>
    </div>
)
}

let mapStateToProps = function(state){
    return {
        name: state.SmurfFormReducer.name,
        age: state.SmurfFormReducer.age,
        height: state.SmurfFormReducer.height
    }
}

export default connect(mapStateToProps,{onChange})(SmurfForm)