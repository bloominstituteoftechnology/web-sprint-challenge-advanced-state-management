import React, {useState} from "react"
import {connect} from "react-redux"



function Form() {

const [name, setName] = useState("")

const handleChange = (e) => {
    setName(e.target.value)

}

    return(
        <form>
            <label>Name</label>
            <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}>
            
            </input>
        </form>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         isLoading: state.smurfReducer.isLoading,
//         isError: state.smurfReducer.isError,
//         error: state.smurfReducer.error,
        
//     }
// }

// export default connect(mapStateToProps, {})(Form)

export default Form