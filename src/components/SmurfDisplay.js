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
                {this.props.smurfData.map((smurf, id) => (
          <div>
            <h4 key={id}></h4>
            <p>  {smurf.name}</p>
            <p>{smurf.description}</p>
            <p>{smurf.nickname}</p>
            <p>{smurf.positon}</p>
             
        </div>
        ))}
          </div>   
        )
    }
}

const mapStateToProps = (state) =>{
return{
    smurfData:state.smurfData,

}



}




export default connect(mapStateToProps,{})(SmurfDisplay)