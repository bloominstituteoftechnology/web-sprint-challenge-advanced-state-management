import React, {useState} from 'react'
import './nav.css'
import logo from '../../assets/image/logo.svg'

import {NavLink} from 'react-router-dom'

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className='header'>
      <div className='container'>
        <nav className='navigation'>
          <NavLink to='/'>
            <img src={logo} alt='' />
          </NavLink>

          <div className='menu'>
            <NavLink to='/smurfs'>SMURFS</NavLink>
            <div className='login--btn'>
              <NavLink to='/smurfs'>login</NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navigation
