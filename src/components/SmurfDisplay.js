import React from "react";
import { connect } from "react-redux";
import { getSmurfData, putSmurfData } from "../actions";


 class SmurfDisplay extends React.Component {
   

     componentDidMount(){
         getSmurfData()
         putSmurfData()
     }
    
     if(error) {
         return <h2>We have an Error: {error}</h2>
     }

     

     

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        smurfData:state.smurfData,
        newSmurfData:state.newSmurfData
    }
}
export default connect(mapStateToProps,{})(SmurfDisplay)