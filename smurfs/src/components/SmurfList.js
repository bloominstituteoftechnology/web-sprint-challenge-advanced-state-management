import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getSmurfs } from '../action'



const SmurfList = (props) => {
    const {smurfs} = props

    useEffect(() => { 
        props.getSmurfs()
    }, [])


    return ( 
        <div>
            {smurfs.map((smurf) => { 
               return <div className='card' key={smurf.id}>
                    <h2>{smurf.name}</h2>
                    <p>AGE: {smurf.age} HEIGHT: {smurf.height} </p>
                </div>
            })}

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
