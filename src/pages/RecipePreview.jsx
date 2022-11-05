import Recipe from "../components/Recipes/Recipe/Recipe";
import Spinner from "../components/UI/Spinner";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getAllRecipe } from "../components/utils/api";
import axios from "axios";

const RecipeReview = () => {
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const { idRecipe, recipe: dataRecipe } = params;

  const getRecipeData = async (id) => {
    setIsLoading(true);
    try {
      const data = await getAllRecipe(`/${id}`);
      setRecipe(() => {
        return { ...data.recipe };
      });
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    getRecipeData(idRecipe);
    return () => {
      source.cancel();
    };
  }, [idRecipe]);

  return (
    <>
      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spinner />
        </div>
      ) : (
        <Recipe recipe={recipe} data={dataRecipe} />
      )}
    </>
  );
};

export default RecipeReview;
