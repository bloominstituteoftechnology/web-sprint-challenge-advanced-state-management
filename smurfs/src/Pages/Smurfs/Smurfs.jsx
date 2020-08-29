import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions/smurfsAction'


const Smurfs = ({ data }) => {

    return (
        <div>
            <h1>Smurfs Home</h1>
            <h2>{data.name}</h2>
        </div>
    )
}

export default Smurfs
