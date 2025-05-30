import React from "react";
import { useState } from "react";

function Recipes({ onSubmitRecipe }) {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
  });

  const handleChange = (e) => {
    setRecipe((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitRecipe(recipe);
    setRecipe({ name: "", ingredients: [] });
  };

  return (
    <div>
      <label>
        add recipe:
        <input name="name" value={recipe.name} onChange={handleChange}></input>
      </label>
      <label>
        {" "}
        ingredients:
        <input
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSubmit}>✔</button>
    </div>
  );
}

export default Recipes;
