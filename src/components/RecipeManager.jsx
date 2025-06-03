import React from "react";
import Recipes from "./Recipes";
import { useState } from "react";
import DisplayRecipe from "./DisplayRecipe";

function RecipeManager() {
  const [recipeList, setRecipeList] = useState([]);

  const addRecipe = (newRecipe) => {
    const newRecipeId = {
      ...newRecipe,
      id: crypto.randomUUID(),
    };

    setRecipeList((prevRecipe) => [...prevRecipe, newRecipeId]);
  };

  const deleteRecipe = (id) => {
    setRecipeList(recipeList.filter((a) => a.id !== id));
    console.log("borrado");
  };

  return (
    <div>
      <Recipes onSubmitRecipe={addRecipe} />
      <DisplayRecipe recipes={recipeList} deleteRecipe={deleteRecipe} />
    </div>
  );
}

export default RecipeManager;
