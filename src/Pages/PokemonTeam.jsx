import React, { useEffect, useState } from 'react'
import CardTeam from '../Components/CardTeam';
import team from '../img/pokemonTeam.png'

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
      <div className="flex justify-center items-center">
        <img src={team} alt='pokemon team' />
      </div>

      <div className="flex flex-wrap justify-around"  style={{backgroundColor: '#0c1c3e'}}>
        {pokemonSelected && pokemonSelected.map((pokemon) => {
          return <div key = {pokemon.id}>
              <CardTeam props={pokemon}/>
          </div>
        })}      
      
      </div> 
    </div>  
      
  )
}

export default PokemonTeam
