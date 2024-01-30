import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CardDetails from '../Components/CardDetails';

const PokemonDetail = () => {
    const [individualPokemon, setIndividualPokemon] = useState({});
    const [imgPokemon, setImgPokemon] = useState({})
    const params = useParams();
    console.log(params);
    const url=`https://pokeapi.co/api/v2/ability/${params.id}/`
    const url2= `https://pokeapi.co/api/v2/pokemon/${params.id}/`

    useEffect(() => {
        axios(url)
        .then((resp) => {
            console.log(resp.data);
            console.log('----resp data ----');
            setIndividualPokemon(resp.data);
        })
    }, [])

    useEffect(() => {
        axios(url2)
        .then((resp2) =>{
           console.log('imagen') 
           console.log(resp2.data);
           setImgPokemon(resp2.data);
        })

    },[])

    console.log(individualPokemon.effect_entries);
    console.log(imgPokemon);
  return (
    <div className="flex justify-center items-center">
       {individualPokemon && Object.keys(individualPokemon).length > 0 && Object.keys(imgPokemon).length > 0 && (
       <CardDetails key={individualPokemon} props1={individualPokemon} props2={imgPokemon}/>
        )} 
        
        
    </div>
  )
}

export default PokemonDetail
