import React from 'react';
import { useSelector } from 'react-redux';


const Smurfs = () => {
    const {loading, smurf} = useSelector(state => state);

    return (
        <>
            {loading ? <h1>'Loading smurf...'</h1> :  smurf.map(smurf=> {
                return (
                <div>
                    <div>Name: {smurf.name}</div>
                    <div>Height: {smurf.height}</div>
                    <div>Age: {smurf.age}</div>
                </div>
                )
            })}
                
        </>
    );
}

export default Smurfs;