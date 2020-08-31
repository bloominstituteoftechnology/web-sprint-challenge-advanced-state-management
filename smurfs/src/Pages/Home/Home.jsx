import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as actions from '../../redux/actions/smurfsAction'
import Smurfs from '../Smurfs/Smurfs'
import './home.css'

const Home = () => {
  const smurfsData = useSelector((state) => state.smurfs)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('Home Render 1')
    dispatch(actions.fetchUserApi())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='home'>
      <div className='items'>
        {smurfsData.users?.map((smurf) => (
          <Smurfs key={smurf.id} data={smurf} />
        ))}
      </div>
    </div>
  )
}

export default Home
