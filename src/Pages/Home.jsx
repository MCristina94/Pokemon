import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Components/Card';
import PokemonTeam from './PokemonTeam';

const Home = () => {
  
   const [pokemones, setPokemones] = useState([]);
   const [pokemonesDetails, setPokemoneDetails] = useState([]);
   const [pokemonSelected, setPokemonSelected] = useState([]);
   const url = 'https://pokeapi.co/api/v2/pokemon/';

  useEffect(() => {

     axios(url)
      .then((response) => {
        
        setPokemones(response.data.results);
             
      }).catch((error) => {
        console.error(error);
      }) 

    
       
    }, [])


    useEffect(() => {
     
      const updatePokemones = pokemones.map((pokemon) => {
        return axios(pokemon.url)
          .then((response) => response.data)
          .catch((error) => console.error(error));
      });
      
      Promise.all(updatePokemones).then((resolvedPokemons) => {
        setPokemoneDetails(resolvedPokemons);
      });
     
      
    }, [pokemones]);
      console.log('--------------------');
      console.log(pokemonesDetails);
    
    



  return (
    <div>
      <h1>POKEMÓN</h1>
      {pokemonesDetails && pokemonesDetails.map((pokemon) => {
        return <div key ={pokemon.id}>
          <Card props={pokemon} setPokemonSelected={setPokemonSelected}/>
        </div>
               
      })}


       
      

    </div>
  )
}



export default Home

/* {pokemonesDetails && pokemonesDetails.map((pokemon) => {
        return <div>
          <PokemonTeam key={pokemon.id} props={pokemon} />
        </div>
               
      })}*/