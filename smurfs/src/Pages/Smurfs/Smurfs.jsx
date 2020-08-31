import React from 'react'
import {Link} from 'react-router-dom'
import {Card, CardImg, CardBody, CardTitle, Button} from 'reactstrap'
import './smurfs.css'
const Smurfs = ({data}) => {
  return (
    <div className='smurfs'>
      <Card>
        <CardImg
          className='cardImg'
          top
          // width='50%'
          height='278px'
          src={data.image}
          alt='Card image cap'
        />
        <CardBody>
          <CardTitle>{data.name}</CardTitle>

          <Button color='primary' className='smurfs-btn'>
            <Link to={`/smurfs/${data.id}`}> More Details </Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Smurfs

// https://www.freepngimg.com/thumb/smurfs/32261-8-smurfs-free-download.png
// Papa Smurf
