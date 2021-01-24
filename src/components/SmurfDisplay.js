import React from "react";
import { connect } from "react-redux";
import { getSmurfData } from "../actions";

class SmurfDisplay extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    this.props.getSmurfData();
  }

  render() {
    console.log(this.props)  
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
       smurfData:state.smurfData,
       error:state.error
  };
};

export default connect(mapStateToProps, {getSmurfData})(SmurfDisplay);
