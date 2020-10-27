import React from 'react';
import { connect } from 'react-redux';
import { getX } from '../actions/action';

const XList = props => {
    const fetchX = e => {
        e.preventDefault();
        props.getX();
    };
    console.log(props);
    console.log(props.x);
    return(
        <div className='App-list'>
            <h2>Smurf List</h2>
            {props.x.map(x=> (
                <div className='smurfs' key={new Date()}>
                    <h4>{x.name}</h4>
                    <p>Height: {x.height}</p>
                    <p>Age: {x.age}</p>
                </div>
            ))}
            {props.error && <p className="error">{props.error}</p>}
            <button className='fetch-button' onClick={fetchX}>Fetch Smurfs!</button>
        </div>
    )
}

const mapStateToProps = state => ({
    x: state.x,
    error: state.error
  });
  
  export default connect(
    mapStateToProps,
    { getX }
  )(XList);