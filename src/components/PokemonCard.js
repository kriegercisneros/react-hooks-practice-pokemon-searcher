import React, { useState } from "react";
import { Card } from "semantic-ui-react";


//need to render each pokemon name, sprite and hp inside of this card
function PokemonCard({name, spriteFront, spriteBack, hp}) {
//  const {front, back} = sprite
 const [showFront, setShowFront] = useState(true)

    return (
      <Card>
      <div>
        <div className="image" >
          {showFront ? 
            //it is console.logging but not displaying on the DOM
            //also it is only allowing me to click once 
           (<img src={spriteFront} alt="hi" onClick={()=>setShowFront(!showFront)}/>) 
           : 
           (<img src={spriteBack} alt="hi" onClick={()=>setShowFront(!showFront)}/>) 
          }
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
           {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );

}
export default PokemonCard;
