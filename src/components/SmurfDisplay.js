import React from "react";
import { connect } from "react-redux";
import { getSmurfData, putSmurfData } from "../actions";


 class SmurfDisplay extends React.Component {
   

     componentDidMount(){
         getSmurfData()
         
     }
    
    
   componentDidUpdate(){
       putSmurfData()
   }
     

     

    render() {
        return (
            
            <div>
                {this.props.smurfData.map((smurf,index) => (
          <div>
            <h4 key={smurf.id}></h4>
            <p>  {index}</p>
            <p>{smurf.description}</p>
            <p>{smurf.nickname}</p>
            <p>{smurf.name}</p>
            <p>{smurf.position}</p>
             
        </div>
        ))}
          </div>   
        )
    }
}

const mapStateToProps = (state) =>{
return{
    smurfData : [{
        id: state.id,
        name:state.name,
        position:state.position,
        nickname: state.nickname,
        description:state.description

    }],
    

}


}




export default connect(mapStateToProps,{})(SmurfDisplay)