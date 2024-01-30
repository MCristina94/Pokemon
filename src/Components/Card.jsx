import React from 'react'
import { Link } from 'react-router-dom'


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
    <div className="">
      <div className=" p-5 h-96 w-64 bg-white m-10 rounded-xl">
        <img src={props.sprites.other['official-artwork'].front_default} alt="" className=" w-56 h-auto" />
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-xl my-5"> {props.name.charAt(0).toUpperCase() + props.name.slice(1)} </h4>
          <button className="mb-2 rounded-full border border-blue-500 px-4" onClick={pokemonStorage}>I Chose You</button>
          <Link to={'/detail/' + props.id}>
          <button className="mb-2 rounded-full border border-blue-500 px-4 ">Learn More</button>
          </Link>
        </div>  
      </div>

    </div>
   
  )
}

export default Card
