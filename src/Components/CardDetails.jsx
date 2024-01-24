import React from 'react'

function CardDetails({props1,props2}) {
    
    const { effect, short_effect } = props1.effect_entries[1];
  return (
    <div>
        <h1>Metting {props1.name}</h1>
        <img src={props2.sprites.other['official-artwork'].front_default} alt="" />
        <h3>{props1.name}</h3>
        <h3>Habilidades</h3>
        <h4>{effect}</h4>
        <h4>{short_effect}</h4>
        
    </div>
  )
}

export default CardDetails

//
/*if (!pokemon || Object.keys(pokemon).length === 0) {
        return <div>Loading...</div>; 
    }*/