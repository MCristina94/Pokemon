import React from 'react'
import { Link } from 'react-router-dom';

const CardTeam = ({props}) => {
    console.log(props.id);
  return (
    <div>
        <img src={props.sprites.other['official-artwork'].front_default} alt="" />
      <h4> {props.name} </h4>
      <button>Delete</button>
      <Link to={'/detail/' + props.id}>
        <button>Learn More</button>
      </Link>
     
    </div>
  )
}

export default CardTeam