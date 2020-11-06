import axios from 'axios'
import React, { useState, useEffect} from 'react';

const SmurfList = (props) => {
   

    return (
            <div>
                <p>{`Smurf: ${props.data.name}, ${props.data.height}, ${props.data.age}`}</p>
            </div>
    )
}

export default SmurfList;