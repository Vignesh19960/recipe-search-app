import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import Favourites from "./pages/Favourites";

function App() {

  const [favourites, setFavourites] = useState([]);

  const saveFavourite = (recipe) => {

    setFavourites((previous) => {

      const alreadyExists = previous.some(
        (item) => item.idMeal === recipe.idMeal );

      if (alreadyExists) {
        return previous;
      }

      return [...previous, recipe];
    });
  };

  const removeFavourite = (id) => {

    setFavourites((previous) =>
      previous.filter(
        (recipe) => recipe.idMeal !== id
      )
    );
  };

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/recipes" element={ <Recipes favourites={favourites} onSave={saveFavourite} /> } />

        <Route path="/recipes/:id"  element={<RecipeDetail />} />

        <Route path="/favourites" element={ <Favourites favourites={favourites} onRemove={removeFavourite} /> } />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
