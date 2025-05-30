import React from "react";

function DisplayRecipe({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>{recipe.name}</div>
      ))}
    </div>
  );
}

export default DisplayRecipe;
