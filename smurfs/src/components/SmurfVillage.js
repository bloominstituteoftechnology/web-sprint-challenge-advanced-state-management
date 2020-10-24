
import React, {useEffect} from 'react';
import {getSmurf, removeSmurf} from '../actions';
import {connect} from 'react-redux';

function SmurfVillage(props) {

  useEffect(() => {
    props.getSmurf()
  }, [props.getSmurf])

  if(props.isFetching){
    return <h2 className="loading">Smurfs are on the way!</h2>
  }

  const handleDelete = id => {
    console.log(id);
    props.removeSmurf(id);
  };

  return (
    <div>
        <button
        onClick={() => props.getSmurf()}>Get Smurfs</button>

        {props.smurfs.map(smurf => (
            <div key={smurf.id}>
                <h3>{smurf.name}</h3>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
                <button onClick={handleDelete}>Delete</button>
            </div>
        ))}
    </div>
  )
};

const mapStateToProps = state => {
  return{
      smurfs: state.smurfs,
      isFetching: state.isFetching,
      error: state.error
  };
};

export default connect(mapStateToProps, {getSmurf, removeSmurf})(SmurfVillage);