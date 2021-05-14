import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchFail, fetchSmurf } from "./../actions";

const Smurf = (props) => {
  const { smurf, isFetching, error } = props;

  useEffect(() => {
    props.fetchSmurf();
  }, []);

  const handleClick = () => {
    props.fetchSmurf();
  };

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching Smurf for you!</h2>;
  }

  return (
    <div data-testid="smurf" className="card">
      <div className="card-body">
        <h3 className="card-title">{smurf.name}</h3>
        <hr />
        <p className="card-text">
          <b>Position:</b> {smurf.position}
        </p>
        <p className="card-text">
          <b>Nickname:</b> {smurf.nickname}
        </p>
        <p className="card-text">
          <b>Description:</b> {smurf.description}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurf: state.smurf,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchSmurf, fetchFail })(Smurf);
