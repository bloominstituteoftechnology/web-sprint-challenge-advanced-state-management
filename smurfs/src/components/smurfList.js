import React, { useEffect } from "react";
import SmurfCard from "./smurfCard";
import Loader from "react-loader-spinner";
import {getData} from "../actions/actions";
import {connect} from "react-redux";
import image from "./smurfs.jpg"

function SmurfList(props) {
    console.log(props);
    
    return(
        <>
        {props.data.length < 1 ? (
            <div className="welcome">
            <h2>Meet Your New Neighbors</h2>
            <img src={image} alt="welcome-village" />
            <Loader type="ThreeDots" color="#A52A2A" heigth={40} width={40} />
            </div>  
        ) : (
        <div className="smurf-list">
            {props.data.map((obj) => {
                return <SmurfCard key={obj.id} object={obj} />
            })}
        </div>
        )}
        
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