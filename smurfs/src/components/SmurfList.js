import React from "react";
import { connect } from "react-redux";
import SmurfCard from "./SmurfCard";

const SmurfList = props => {
  console.log("SmurfList", props);
  return (
    <>
      <div>
        {props.smurfList.map(smurf => (
          <SmurfCard key={smurf.id} smurf={smurf} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    smurfList: state.smurfList
  };
};

export default connect(mapStateToProps, {})(SmurfList);