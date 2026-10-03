import { useState } from "react";
import useRecipes from "../hooks/useRecipes";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";

function Recipes({ favourites, onSave }) {

  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  const {
    data,
    loading,
    error
  } = useRecipes(query);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === "") {
      return;
    }

    setQuery(input);
  };

  const isFavourite = (id) => {
    return favourites.some(
      (recipe) => recipe.idMeal === id
    );
  };

  return (
    <div className="page">

      <h1>Search Recipes</h1>

      <form
        onSubmit={handleSubmit}
        className="search-form"
      >

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for chicken, pasta, cake..."
        />

        <button type="submit">
          Search
        </button>

      </form>

      {loading && <Spinner />}

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      {!loading && !error && query && data.length === 0 && (
        <p>
          No recipes found for "{query}".
        </p>
      )}

      <div className="recipe-grid">

        {data.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            onSave={onSave}
            isFavourite={isFavourite(recipe.idMeal)}
          />
        ))}

      </div>

    </div>
  );
}

export default Recipes;