import React from 'react';
import { connect } from 'react-redux';
import {getSmurfs} from '../actions/action';
import SmurfCard from "./SmurfCard";

const Smurfs = props => {
 const fetchSmurfs = e => {
     props.getSmurfs();
     console.log('this function is running')
 };
console.log(props.smurfs)
 return (
     <div>
         <h1>Smurfs</h1>
         {props.isFetching && <p>Fetching Smurfs...</p>}
         <div>
             {props.smurfs.map(smurfs => (
                 <>
                <SmurfCard key={smurfs.url} smurfs={smurfs}/>
             </>
             ))}
             
         </div>
         {props.error && <p className="error">{props.error}</p>}
         <button onClick={fetchSmurfs}>Get the Smurfs!</button>
     </div>
 );
};

const mapStateToProps = state => ({
    smurfs: state.smurfs
})
const mapDispatchToProps = {
    getSmurfs
}
export default connect(mapStateToProps, mapDispatchToProps)(Smurfs);