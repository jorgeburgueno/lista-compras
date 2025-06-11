import React from "react";
import { useState } from "react";

function DisplayRecipe({ recipes, deleteRecipe }) {
  const [isOpen, setIsOpen] = useState(null);
  const [details, setDetails] = useState(null);

  return (
    <div>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          onClick={() =>
            details !== recipe.id ? setDetails(recipe.id) : setDetails(null)
          }
        >
          {recipe.name}
          <button
            onClick={() =>
              isOpen !== recipe.id ? setIsOpen(recipe.id) : setIsOpen(null)
            }
          >
            ⋮
          </button>
          {isOpen === recipe.id && ( // if isOpen is true open the buttons
            <div>
              <button>edit</button>
              <button onClick={() => deleteRecipe(recipe.id)}>X</button>{" "}
            </div>
          )}
          {details === recipe.id && (
            <div>
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index}>{ingredient}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default DisplayRecipe;
