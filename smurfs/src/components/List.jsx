import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";
function SmurfsList(props) {
  useEffect(() => {
    props.fetchSmurfs();
    console.log(props);
  }, []);
  return (
    <div>
      {props.smurfs.map((data) => {
        return (
          <ul key={data.id}>
            <li>Name: {data.name}</li>
            <li>Age: {data.age}</li>
            <li>Height: {data.height}</li>
          </ul>
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return { smurfs: state.smr.smurfs };
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfsList);
