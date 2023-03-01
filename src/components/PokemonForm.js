import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handlePost}) {

  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [spritesFront, setSpritesFront] = useState("")
  const [spritesBack, setSpritesBack] = useState("")

function handleSubmit(e){
  e.preventDefault();
  const newPokemonObj={
    name: name,
    hp: hp,
    sprites: {
      front: spritesFront,
      back: spritesBack
    }
    }
    handlePost(newPokemonObj)
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={((e)=>setName(e.target.value))}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={((e)=>setHp(e.target.value))}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={spritesFront} 
            onChange={((e)=>setSpritesFront(e.target.value))}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={spritesBack} 
            onChange={((e)=>setSpritesBack(e.target.value))}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
