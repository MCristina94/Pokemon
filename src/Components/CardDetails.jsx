import React from 'react'

function CardDetails({props1,props2}) {
    
    const { effect, short_effect } = props1.effect_entries[1];
  return (
    <div className="m-20">
        <div className="flex justify-center items-center">
          <img src={props2.sprites.other['official-artwork'].front_default} alt="" />  
        </div>
        <div className="flex flex-col justify-center items-center mx-20">
          <h2 className="text-2xl font-bold m-5">{props2.name.charAt(0).toUpperCase() + props2.name.slice(1)}</h2>
          <h3 className="m-2">Hability: {props1.name}</h3>
          <h4 className="text-center">{effect}</h4>
          <h4 className="text-center">{short_effect}</h4>
        </div>
        
        
    </div>
  )
}

export default CardDetails
