import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

//here is where we fetch and useEffect to do so
//we want to useEffect because we are grabbing information that is
//beyond the scope of our project and is not user generated
function PokemonPage() {

  const[card, setCard]=useState([])
  const [search, setSearch]=useState("")

  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then(r=>r.json())
    .then(data => setCard(data))
  }, [])
  
  const displayedPokemon = card.filter((c)=>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  function handlePost(postPokemon){
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(postPokemon)
    })
    .then(response => response.json())
    .then(newPokemon=>{
      const newPokemonArray = [...card, newPokemon]
      setCard(newPokemonArray)
    })
  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handlePost={handlePost}/>
      <br />
      <Search onSearch={setSearch}/>
      <br />
      <PokemonCollection card={displayedPokemon} />
    </Container>
  );
}

export default PokemonPage;
