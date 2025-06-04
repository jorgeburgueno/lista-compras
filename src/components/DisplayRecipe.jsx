import React from "react";
import { useState } from "react";

function DisplayRecipe({ recipes, deleteRecipe }) {
  const [isOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState(false);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} onClick={() => setDetails(!details)}>
          {recipe.name}
          <button onClick={() => setIsOpen(!isOpen)}>⋮</button>
          {isOpen && ( // if isOpen is true open the buttons
            <div>
              <button>edit</button>
              <button onClick={() => deleteRecipe(recipe.id)}>X</button>{" "}
            </div>
          )}
          {details && <div>{recipe.ingredients}</div>}
        </div>
      ))}
    </div>
  );
}

export default DisplayRecipe;
