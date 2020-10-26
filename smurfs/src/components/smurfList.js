import React from "react";
import SmurfCard from "./smurfCard";
import {getData} from "../actions/actions";
import {connect} from "react-redux";
import image from "./smurfs.jpg"

function SmurfList(props) {
    console.log(props);
    return(
        <>
        {props.data.length < 1 ? (<div className="welcome">
        <img src={image} alt="welcome-village" />
        <button onClick={props.getData()}>See Smurfs</button>
            </div>) : 
            (<div className="smurf-list">
                <h2>Meet Your New Neighbors</h2>
            {props.data[0].map((obj) => {
                return <SmurfCard key={obj.id} object={obj} />
            })}
        </div>)}
        
        </>
    )
};

const mapStateToProps = (state) => {
    return{
        data: state.data,
        loading: state.loading
    }
};
export default connect(mapStateToProps, {getData})(SmurfList);