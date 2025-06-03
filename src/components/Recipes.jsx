import React from "react";
import { useState } from "react";

function Recipes({ onSubmitRecipe }) {
  const [addRecipe, setAddRecipe] = useState(false);

  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
  });

  const handleChange = (e) => {
    setRecipe((prev) => ({
      ...prev,
      [e.target.name]: e.target.value, // name se refiere al nombre de la propiedad que se le dio al <input>
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitRecipe(recipe);
    setRecipe({ name: "", ingredients: [] });
    setAddRecipe(false);
  };

  return (
    <div>
      <button onClick={() => setAddRecipe(!addRecipe)}>
        Añadir nueva receta
      </button>

      {addRecipe && (
        <div>
          <label>
            add recipe:
            <input
              name="name"
              value={recipe.name}
              onChange={handleChange}
            ></input>
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
      )}
    </div>
  );
}

export default Recipes;
