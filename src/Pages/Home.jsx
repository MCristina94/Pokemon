import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Components/Card';
import PokemonTeam from './PokemonTeam';
import pokemon from '../img/pokemon.png'

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
    <div className="flex items-center justify-center">
      <img src={pokemon} alt='pokemon' className=" w-2/3 h-auto py-5" />
    </div>
      
    <div className="flex flex-wrap justify-around" style={{backgroundColor: '#0c1c3e'}}>
      {pokemonesDetails && pokemonesDetails.map((pokemon) => {
        return <div key ={pokemon.id}>
          <Card props={pokemon} setPokemonSelected={setPokemonSelected}/>
        </div>
               
      })}

    </div>
      

       
      

    </div>
  )
}



export default Home

