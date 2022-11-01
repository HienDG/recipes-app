import classes from "./NavigationBar.module.scss";
import { newMeaList } from "../utils/helper";

import { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
   const [next, setNext] = useState({ min: 0, max: 8 });

   const list = [...newMeaList].slice(next.min, next.max);

   const renderList = list.map((item, i) => (
      <Link to={`recipes/${item}`} key={i} className={classes["meal__list"]}>
         {item}
      </Link>
   ));

   const nextMenu = () => {
      setNext((prevState) => {
         return { min: prevState.min + 8, max: prevState.max + 8 };
      });
   };
   const previousMenu = () => {
      setNext((prevState) => {
         return { min: prevState.min - 8, max: prevState.max - 8 };
      });
   };
   return (
      <nav>
         {next.min > 0 && (
            <button type="" className={classes["btn__left"]} onClick={previousMenu}>
               &larr;
            </button>
         )}
         <> {renderList}</>
         {next.max < newMeaList.length && (
            <button type="" className={classes["btn__right"]} onClick={nextMenu}>
               &rarr;
            </button>
         )}
      </nav>
   );
};

export default NavigationBar;
