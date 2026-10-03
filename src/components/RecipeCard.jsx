import { Link } from "react-router-dom";

function RecipeCard({ recipe, onSave, isFavourite }) {
  return (
    <div className="recipe-card">

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />

      <div className="recipe-content">

        <h3>{recipe.strMeal}</h3>

        <p>
          Category: {recipe.strCategory}
        </p>

        <p>
          Area: {recipe.strArea}
        </p>

        <Link
          to={`/recipes/${recipe.idMeal}`}
          className="details-btn"
        >
          View Details
        </Link>

        <button
          onClick={() => onSave(recipe)}
          className="favourite-btn"
        >
          {isFavourite
            ? "❤️ Saved"
            : "🤍 Save to Favourites"}
        </button>

      </div>
    </div>
  );
}

export default RecipeCard;