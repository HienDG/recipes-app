import SearchResult from "../components/Recipes/SearchResult";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "../components/UI/Spinner";

import { getAllRecipe } from "../components/utils/api";

const SearchRecipes = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [recipe, setRecipe] = useState([]);
   const params = useParams();
   const { recipe: query } = params;

   const getRecipeData = async (query) => {
      setIsLoading(true);
      try {
         const data = await getAllRecipe("", { search: query });
         setRecipe(() => {
            return [...data.recipes];
         });
      } catch (err) {
         console.log(err);
      }
      setIsLoading(false);
   };

   useEffect(() => {
      getRecipeData(query);
   }, [query]);

   return (
      <>
         {isLoading ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
               <Spinner />
            </div>
         ) : (
            <SearchResult recipes={recipe} title={query} />
         )}
      </>
   );
};

export default SearchRecipes;
