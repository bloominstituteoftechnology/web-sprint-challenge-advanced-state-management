import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getSmurfs } from '../action'



const SmurfList = (props) => {

    useEffect(() => { 
        props.getSmurfs()
    }, [])


    return ( 
        <div>
            {console.log("SMURFLIST", props.smurfs)}

        </div>
     );
}

const mapStateToProps = (state) => { 
    return { 
        isLoading: state.isLoading, 
        smurfs: state.smurfs,
        error: state.error
    }
}
 
export default connect(mapStateToProps, { getSmurfs })(SmurfList);
