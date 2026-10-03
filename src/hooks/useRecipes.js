import { useEffect, useState } from "react";
import axios from "axios";

function useRecipes(query) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) {
      setData([]);
      return;
    }

    const fetchRecipes = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );

        setData(response.data.meals || []);
      } catch (err) {
        setError("Failed to fetch recipes.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query]);

  return {
    data,
    loading,
    error,
  };
}

export default useRecipes;