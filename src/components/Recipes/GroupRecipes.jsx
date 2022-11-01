import classes from "./GroupRecipes.module.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Spinner from "../UI/Spinner";

import ListRecipe from "./ListRecipe";

const GroupRecipes = (props) => {
   const [isLoading, setIsLoading] = useState(false);
   const [arr, setArr] = useState([]);
   const item = props.items[0];

   const fetchData = async (query) => {
      const api = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}&key=0f844934-2347-4a86-a45e-7f4553e89dd3`;
      setIsLoading(true);
      const res = await fetch(api);
      if (!res.ok) return;
      const data = await res.json();
      setArr(() => {
         return [...data.data.recipes];
      });
      console.log(data);
      setIsLoading(false);
   };

   useEffect(() => {
      fetchData(item);
   }, [item]);

   const clickHandler = (event) => {
      const query = event.target.innerHTML;
      fetchData(query);
   };

   const newArr = arr.length > 0 ? [...arr].slice(0, 8) : arr;
   const renderList = newArr.map((item, i) => (
      <ListRecipe
         key={i}
         title={item.title}
         image={item["image_url"]}
         id={item.id}
         className={classes.item}
      />
   ));

   return (
      <section>
         <div className={classes["group__title"]}>
            <h2 className={classes.title}>{props.title}</h2>
            <div className={classes["group__item"]}>
               {props.items.map((item, i) => (
                  <Link key={i} className={classes.item} onClick={clickHandler} data-recipe={item}>
                     {item}
                  </Link>
               ))}
            </div>
         </div>
         <ul className={classes.list}>
            {isLoading ? (
               <div>
                  <p style={{ fontSize: "20px" }}>Loading....</p>
               </div>
            ) : (
               renderList
            )}
         </ul>
      </section>
   );
};

export default GroupRecipes;
