import Recipe from "../components/Recipes/Recipe/Recipe";
import Spinner from "../components/UI/Spinner";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getAllRecipe } from "../components/utils/api";

const RecipeReview = () => {
   const [recipe, setRecipe] = useState({});
   const [isLoading, setIsLoading] = useState(false);
   const params = useParams();
   const { idRecipe } = params;

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
      getRecipeData(idRecipe);
   }, [idRecipe]);

   return (
      <>
         {isLoading ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
               <Spinner />
            </div>
         ) : (
            <Recipe recipe={recipe} />
         )}
      </>
   );
};

export default RecipeReview;
