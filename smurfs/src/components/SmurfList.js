import React from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions/index';

const SmurfList = props => {
  const fetchSmurf = e => {
    e.preventDefault();
    props.getSmurf();
  };

  return (
    <>
      <h2>Your Smurf is on the way!</h2>
      {props.isFetching && <p>Fetching your Smurf</p>}
      <div>
        {props.smurf.map(smurf => (
          <h4 key={smurf.url}>{smurf.name}</h4>
        ))}
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={fetchSmurf}>Fetch Smurf!</button>
    </>
  );
};

const mapStateToProps = state => ({
  smurf: state.smurf,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { getSmurf }
)(SmurfList);