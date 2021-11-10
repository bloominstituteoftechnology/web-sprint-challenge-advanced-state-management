import React from 'react';
import Guest from './Guest';
import { connect } from 'react-redux';

 const GuestList = (props)=> {


    if (props.isLoading) {
        return <h1>Loading...</h1>;
    }


    return(<div className="listContainer">
        {props.guests.map(guest => <Guest guest={guest}/>)}
    </div>);
}

const mapStateToProps = (state) => {
    return {
        guests: state.guests,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(GuestList);