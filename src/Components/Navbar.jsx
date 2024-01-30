import React from 'react'
import {Link,  useNavigate} from 'react-router-dom'
import pokebola from '../img/pokebola.png'


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div style={{backgroundColor: '#0f224a'}} >
      <div className="flex items-center justify-between mx-auto max-w-screen-lg py-10 text-lg text-white">
        <div className="flex items-center">
          <img src={pokebola} alt='pokebola' className="h-10 w-10 mx-4 " /> 
        </div>
        <div className="flex items-center justify-center flex-grow">
          <Link to = '/' className="mx-10"> <h4>Home</h4></Link>
          <Link to = '/pokemonteam'  className="mx-10" > <h4>Your Pokemon Team</h4></Link>
          <Link to = '/about'  className="mx-10" > <h4>About</h4></Link>
        </div>
        <div></div>
      </div>  
    </div>
  )
}

export default Navbar