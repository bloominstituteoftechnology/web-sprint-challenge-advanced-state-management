import React, {useState} from 'react'
import './nav.css'
import logo from '../../assets/image/logo.svg'
import AddSmurfs from '../../Pages/Smurfs/AddSmurfs'
import {NavLink, Link} from 'react-router-dom'

const Navigation = (props) => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <div className='header'>
      <div className='container'>
        <nav className='navigation'>
          <NavLink to='/'>
            <img src={logo} alt='' />
          </NavLink>

          <div className='menu'>
            <NavLink to='/smurfs'>Village</NavLink>
            <div className='login--btn'>
              <Link to='/new'>ADD</Link>
            </div>
          </div>
        </nav>
      </div>
      <AddSmurfs modal={modal} toggle={toggle} />
    </div>
  )
}

export default Navigation
