import React, {useEffect} from 'react'
import './smurfs.css'
import {useSelector, useDispatch} from 'react-redux'
import {getSingleSmurf} from '../../redux/actions/smurfsAction'
import {useParams} from 'react-router-dom'
import {Card, CardBody, CardLink, CardTitle, CardSubtitle} from 'reactstrap'

function SmurfDetails() {
  const smurfData = useSelector((state) => state.smurfs)
  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    dispatch(getSingleSmurf(parseInt(params.id)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='container'>
      <Card className='details'>
        <CardBody>
          <CardTitle>{smurfData.smurf.name && smurfData.smurf.name}</CardTitle>
        </CardBody>

        <img
          width='40%'
          className='smufsDetails--size'
          src={smurfData.smurf.image}
          alt='Cardcap'
        />
        <CardBody>
          <CardSubtitle>Age: {smurfData.smurf.age}</CardSubtitle>
          <CardSubtitle>Height: {smurfData.smurf.height}</CardSubtitle>

          <CardLink href='#'>Card Link</CardLink>
          <CardLink href='#'>Another Link</CardLink>
        </CardBody>
      </Card>
    </div>
  )
}

export default SmurfDetails
