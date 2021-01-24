import React from "react";
import { connect } from "react-redux";
import { getSmurfData } from "../actions";

class SmurfDisplay extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    getSmurfData();
  }

  render() {
    return (
        <>
      <div>
        {this.props.smurfData ? this.props.smurfData.map((smurf) => (
          <div>
            <h4 key={Math.random().toString(36).substr(2, 9)}></h4>
            <p>{smurf.description}</p>
            <p>{smurf.nickname}</p>
            <p>{smurf.name}</p>
            <p>{smurf.position}</p>
          </div>
        ))
      : <p>"Loading..." }</p>}
      </div>
      
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
       smurfData:[{
  
        error:state.error,
        id: state.id,
        name: state.name,
        position: state.position,
        nickname: state.nickname,
        description: state.description,

       }],
    
  };
};

export default connect(mapStateToProps, {getSmurfData})(SmurfDisplay);
