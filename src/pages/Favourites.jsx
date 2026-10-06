import { Link } from "react-router-dom";

function Favourites({ favourites, onRemove }) {

  return (
    <div className="page">

      <h1>❤️ My Favourite Recipes</h1>

      {favourites.length === 0 ? (
      <div>
          <p>
            You haven't saved any recipes yet.
          </p>

          <Link to="/recipes">
            Find Recipes
          </Link>
        </div>

      ) : (   // ternary 

        <div className="recipe-grid">

          {favourites.map((recipe) => (

            <div className="recipe-card" key={recipe.idMeal} >

              <img src={recipe.strMealThumb} alt={recipe.strMeal}  />

              <div className="recipe-content">

                <h3>{recipe.strMeal}</h3>

                <Link to={`/recipes/${recipe.idMeal}`} className="details-btn" >
                  View Details
                </Link>

                <button  onClick={() => onRemove(recipe.idMeal)} className="remove-btn"  >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Favourites;
