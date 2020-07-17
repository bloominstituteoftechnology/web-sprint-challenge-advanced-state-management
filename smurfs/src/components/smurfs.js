import React , {useEffect} from 'react'

import {connect} from 'react-redux'
import {fetchSmurfs} from '../actions/actions'


const Smurf = props => {

    useEffect(()=>{
        
        props.fetchSmurfs();
    }, [])

    return (
        <div>
            {props.isLoading && <h4>Loading your Smurf Village...</h4>}
            {props.error && (<p className="error"> Uh oh where have the Smurfs gone!...{props.error}</p>)}
            {props.smurfs.length > 0 && (

                <div className='smurfs'>
                    
                    {props.smurfs.map( smurf => (
                        <div  className='smurf'key={smurf.id}>
                            <p>Name : {smurf.name}</p>
                            <p>Age: {smurf.age}</p>  
                            <p>Height: {smurf.height}</p>  
                            </div>
                        ))}

                </div>
            )}
         
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading, 
        smurfs: state.smurfs, 
        error: state.error
    }
}

export default connect(mapStateToProps,{fetchSmurfs})(Smurf); 