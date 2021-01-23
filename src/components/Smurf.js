import React from 'react';
import { connect } from "react-redux"

class Smurf extends React.Component {
    render() {
       

        return(<div data-testid="smurf" className="card">
            { props.smurfData.map(smurf,index) => {
                  return

            <div className="smurf-container">
            <div>
             <p key={index}</p>
            <p>{smurf.name}</p>
            <p>{smurf.description}</p>
            <p>{smurf.nickname}</p>
            <p>{smurf.position}</p>
            
            </div>
            </div>

                  



           }} 

        
        </div>);
    }
}
const mapStateToProps = (state) =>{
    return{
    newSmurfData:state.newSmurfData,
    smurfData:state.smurfData
    }
}

export default connect(mapStateToProps,{})(Smurf)

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.