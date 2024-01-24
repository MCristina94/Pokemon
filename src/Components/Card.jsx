import React from 'react'
import { Link } from 'react-router-dom'
import{card, imgCard, textCard} from '../Styles/Card.module.css'

const Card = ({props, setPokemonSelected}) => {

  function pokemonStorage(){
    console.log("hola");
    setPokemonSelected ((prevState) => {
      const favorites = [...prevState, props];
      localStorage.setItem('favorites', JSON.stringify(favorites));
       return favorites;
    })
  }

  return (
    <div className={card}>
      <img className={imgCard} src={props.sprites.other['official-artwork'].front_default} alt="" />
      <article className={textCard}>
        <h4> {props.name} </h4>
        <button onClick={pokemonStorage}>I Chose You</button>
        <Link to={'/detail/' + props.id}>
         <button>Learn More</button>
        </Link>
      </article>
      
    </div>
  )
}

export default Card
