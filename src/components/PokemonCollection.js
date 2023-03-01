import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({card}) {

  const arrayofmap = card.map((c)=>(
    
     <PokemonCard 
       key={c.id}
      name={c.name}
      spriteFront={c.sprites.front}
      spriteBack={c.sprites.back}
      hp={c.hp}
  />))
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {arrayofmap}
    </Card.Group>
  );
}

export default PokemonCollection;
