

import React from 'react'
import { connect } from "react-redux"


class Smurf extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props);
        return (
            <>
            
                  {this.props.newSmurfData ? this.props.newSmurfData.map(function(smurf) {
                      return(
                      
                <div>
                      <h4 key={Math.random().toString(36).substr(2, 9)}></h4>
                      <p>{smurf.description}</p>
                      <p>{smurf.nickname}</p>               
                      <p>{smurf.name}</p>
                      <p>{smurf.position}</p>
                   
              </div>
                      )  
                  })
                :"Loading..."}

                  
            
    </>
            
                  
        )
    }
}










const mapStateToProps = (state) =>{
    return{

        newSmurfData:[{
            error:state.error,
            id:state.id,
            name:state.name,
        position:state.position,
            nickname:state.nickname,
            description:state.description
        }],
        

    }

}
export default connect(mapStateToProps,{})(Smurf)