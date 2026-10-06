import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

function RecipeDetail() {

  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchRecipe = async () => {

      try {

        setLoading(true);

        const response = await axios.get( `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}` );

        setRecipe(response.data.meals?.[0]);

      } catch (err) {

        setError("Unable to load recipe details.");

      } finally {

        setLoading(false);

      }
    };

    fetchRecipe();

  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className="recipe-detail">

      <h1>{recipe.strMeal}</h1>

      <img src={recipe.strMealThumb} alt={recipe.strMeal}   />

      <h3>Category</h3>
      <p>{recipe.strCategory}</p>

      <h3>Area</h3>
      <p>{recipe.strArea}</p>

      <h2>Instructions</h2>

      <p className="instructions">
        {recipe.strInstructions}
      </p>

      <h2>Ingredients</h2>

      <ul>
        {Array.from({ length: 20 }, (_, index) => {

          const ingredient =
            recipe[`strIngredient${index + 1}`];

          const measure =
            recipe[`strMeasure${index + 1}`];

          if (!ingredient) {
            return null;
          }

          return (
            <li key={index}>
              {measure} {ingredient}
            </li>
          );
        })}
      </ul>

    </div>
  );
}

export default RecipeDetail;
