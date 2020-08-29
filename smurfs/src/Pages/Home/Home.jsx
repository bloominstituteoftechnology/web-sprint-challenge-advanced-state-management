import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as actions from '../../redux/actions/smurfsAction'
import Smurfs from '../Smurfs/Smurfs'
import './home.css'

const Home = () => {
  const smurfsData = useSelector((state) => state.smurfs)
  const dispatch = useDispatch()
  console.log(smurfsData)

  useEffect(() => {
    dispatch(actions.fetchUserApi())
  }, [])
  return (
    <div className='home'>
      <div className='items'>
        <h1 className='test'>Home</h1>
        {smurfsData.users?.map((smurf) => (
          <Smurfs data={smurf} />
        ))}
      </div>
    </div>
  )
}

export default Home
