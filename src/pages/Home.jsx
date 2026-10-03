import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <h1>🍴 Welcome to Recipe Finder</h1>

      <p>
        Discover delicious recipes from around the world.
      </p>

      <Link to="/recipes" className="explore-btn">
        Explore Recipes
      </Link>

    </div>
  );
}

export default Home;