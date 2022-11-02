import classes from "./GroupRecipes.module.scss";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import ListRecipe from "./ListRecipe";
import { getAllRecipe } from "../utils/api";

const GroupRecipes = ({ item }) => {
   const [isLoading, setIsLoading] = useState(false);
   const [arr, setArr] = useState([]);

   const fetchData = async (query) => {
      setIsLoading(true);
      try {
         const data = await getAllRecipe("", { search: query });
         setArr(() => {
            return [...data.recipes];
         });
      } catch (err) {
         console.log(err);
      }
      setIsLoading(false);
   };

   useEffect(() => {
      fetchData(item);
   }, [item]);

   const newArr = arr.length > 0 ? [...arr].slice(0, 8) : arr;
   const renderList = newArr.map((recipe, i) => (
      <ListRecipe key={i} title={recipe.title} image={recipe["image_url"]} id={recipe.id} className={classes.item} recipe={item} />
   ));

   return (
      <section>
         <div className={classes["group__title"]}>
            <h2 className={classes.title}>{item}</h2>
         </div>
         <ul className={classes.list}>
            {isLoading ? (
               <div style={{ alignSelf: "center", width: "100%", textAlign: "center" }}>
                  <p style={{ fontSize: "20px" }}>Loading....</p>
               </div>
            ) : (
               <>
                  {renderList}
                  <div className={classes["btn__more"]}>
                     <Link to={`/recipes/search/${item}`}>more...</Link>
                  </div>
               </>
            )}
         </ul>
      </section>
   );
};

export default GroupRecipes;
