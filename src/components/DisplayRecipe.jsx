import React from "react";

function DisplayRecipe({ recipes, deleteRecipe }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          {recipe.name}{" "}
          <button onClick={() => deleteRecipe(recipe.id)}>X</button>{" "}
        </div>
      ))}
    </div>
  );
}

export default DisplayRecipe;
