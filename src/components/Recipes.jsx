import React from "react";
import { useState } from "react";

function Recipes({ onSubmitRecipe }) {
  const [addRecipe, setAddRecipe] = useState(false);

  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [""],
  });

  const handleChange = (e) => {
    setRecipe((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const addIngredientField = () => {
    setRecipe((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, ""],
    }));
  };

  const handleIngredientChange = (e, index) => {
    setRecipe((prev) => ({
      ...prev,
      ingredients: prev.ingredients.map((ingredient, i) =>
        i === index ? e.target.value : ingredient
      ),
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
          <button onClick={addIngredientField}>+</button>
          <label>
            ingredient:
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index}>
                <input
                  name={`ingredient-${index}`}
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(e, index)}
                  placeholder={`ingrediente ${index + 1}`}
                />
              </div>
            ))}
          </label>

          <button onClick={handleSubmit}>✔</button>
        </div>
      )}
    </div>
  );
}

export default Recipes;
