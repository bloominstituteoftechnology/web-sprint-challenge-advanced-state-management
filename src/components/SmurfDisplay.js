import React from "react";
import { connect } from "react-redux";
import { getSmurfData } from "../actions";


 class SmurfDisplay extends React.Component {
   

     componentDidMount(){
         getSmurfData()
         
     }
    
    

     

     

    render() {
        return (
            <div>
                
            </div>
        )
    }
}






export default connect(mapStateToProps,{})(SmurfDisplay)