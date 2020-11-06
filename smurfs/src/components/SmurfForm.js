import React, { useEffect } from 'react';
import { connect } from 'react-redux';



const SmurfForm = (props) => {
    useEffect(() => {
        props.getSmurfs();
    }, [])

    return (
        <div classname="smurf form">
            <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Build your village of Smurfs</h1>
            {props.isLoading && (
                <Loader
                    type="Puff"
                    color="blue"
                    height={100}
                    width={100}
                />
            )}
                <div>
                    <label className="smurf name"{...smurf.props.smurfName}></label>
                    <label className="smurf age"{...smurf.props.smurfAge}></label>
                    <label className="smurf height"{...smurf.props.smurfHeight}></label>
                </div>
                    <button onClick={props.getSmurfs}>Create a New Smurf For Your Village</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurf: state.smurf,
        isLoading: state.isLoading,
        error: state.error
    };
};

export default connect (
    mapStateToProps, { getSmurfs })(SmurfForm)
