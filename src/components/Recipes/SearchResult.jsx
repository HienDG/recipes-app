import classes from "./GroupRecipes.module.scss";
import ListRecipe from "./ListRecipe";
import Pagination from "./Pagination";

import { useState } from "react";

// const retrieveData = () => {
//    const location = JSON.parse(localStorage.getItem("location"));
//    const pagination = JSON.parse(localStorage.getItem("pagination"));

//    return [location, pagination];
// };

// window.addEventListener("load", (event) => {
//    localStorage.setItem("location", JSON.stringify({ min: 0, max: 12 }));
//    localStorage.setItem("pagination", JSON.stringify({ prev: 0, next: 2 }));
// });

const SearchResult = (props) => {
   const [location, setLocation] = useState({ min: 0, max: 12 });
   const [pagination, setPagination] = useState({ prev: 0, next: 2 });

   const maxLength = props.recipes.length;
   const recipes = [...props.recipes].slice(location.min, location.max);
   const renderList = recipes.map((item, i) => (
      <ListRecipe key={i} title={item.title} image={item["image_url"]} id={item.id} />
   ));

   const nextPages = () => {
      setLocation((prevState) => {
         return { min: prevState.min + 12, max: prevState.max + 12 };
      });

      setPagination((prevState) => {
         return { prev: prevState.prev + 1, next: prevState.next + 1 };
      });
   };
   const prevPages = () => {
      setLocation((prevState) => {
         return { min: prevState.min - 12, max: prevState.max - 12 };
      });

      setPagination((prevState) => {
         return { prev: prevState.prev - 1, next: prevState.next - 1 };
      });
   };

   return (
      <section>
         <div className={classes["group__title"]}>
            <h2 className={classes.title}>{props.title}</h2>
         </div>
         <ul className={classes.list}>{renderList}</ul>
         <>
            {maxLength <= 12 ? null : (
               <Pagination
                  length={location}
                  maxLength={maxLength}
                  onNext={nextPages}
                  onPrev={prevPages}
                  page={pagination}
               />
            )}
         </>
      </section>
   );
};

export default SearchResult;
