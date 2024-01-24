import React from 'react'
import {Link,  useNavigate} from 'react-router-dom'
import {nav, linkNav} from '../Styles/Navbar.module.css'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={nav}>
      <Link to = '/' className={linkNav}> <h4>Home</h4></Link>
      <Link to = '/pokemonteam' className={linkNav}> <h4>Your Pokemon Team</h4></Link>
      <Link to = '/about' className={linkNav}> <h4>About</h4></Link>
    </div>
  )
}

export default Navbar