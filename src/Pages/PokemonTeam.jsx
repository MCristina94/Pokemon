import React, { useEffect, useState } from 'react'
import CardTeam from '../Components/CardTeam';

const PokemonTeam = ({props}) => {
    const [pokemonSelected, usePokemonSelected] = useState([]);
    
    useEffect(() => {
       const favorites = localStorage.getItem('favorites');
        if(favorites){
            usePokemonSelected(JSON.parse(favorites));
        }
    }, []) 
    
  return (
    <div>
        <h1>Your Team</h1>

      {pokemonSelected && pokemonSelected.map((pokemon) => {
        return <div key = {pokemon.id}>
            <CardTeam props={pokemon}/>
        </div>
      })}      
    
    </div>
  )
}

export default PokemonTeam
/*<img src={props.sprites.other['official-artwork'].front_default} alt="" />
      <h4> {props.name} </h4>
      <button >Eliminate</button> 
      
      -----
      
      <div>
        <h1>Your Team</h1>
      <ul>
        {pokemonSelected.map(pokemonSelected => <li key={pokemonSelected.id}>{pokemonSelected.name}</li>)}
      </ul>      
    
    </div>
    
    
    ----
    <h1> {pokemon.name}</h1>
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />*/

