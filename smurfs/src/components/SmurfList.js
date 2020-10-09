import React from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions/index';

const SmurfList = props => {
  // const [smurfs, setSmurfs] = useState([]);

  const fetchSmurf = e => {
    e.preventDefault();
    props.getSmurf();
  };

  return (
    
    <>
      <h2>Your Smurf is on the way!</h2>
      {this.props.isFetching && <p>Fetching your Smurf</p>}
      <div>
        {this.props.smurfs.map(smurf => (
          <h4 key={this.props.smurfs.id}>{this.props.smurfs.name}</h4>
        ))}
      </div>
      {this.props.error && <p className="error">{this.props.error}</p>}
      <button onClick={fetchSmurf}>Fetch Smurf!</button>
    </>
  );
};

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { getSmurf }
)(SmurfList);